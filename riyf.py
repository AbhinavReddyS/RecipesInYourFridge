import json
import pickle
import string
import re
from nltk.stem import PorterStemmer
from db import DbInstance
import sys
from nltk.stem import WordNetLemmatizer
from nltk.util import bigrams
import pandas as pd
import operator
import nltk

class RiyfLogic:

    measures = ['litrbes', 'liter', 'millilitres', 'mL', 'grams', 'g', 'kg', 'teaspoon', 'tsp', 'tablespoon', 'tbsp',
            'fluid', 'ounce', 'oz', 'fl.oz', 'cup', 'pint', 'pt', 'quart', 'qt', 'gallon', 'gal', 'smidgen', 'drop',
            'pinch', 'dash', 'scruple', 'dessertspoon', 'teacup', 'cup', 'c', 'pottle', 'gill', 'dram', 'wineglass',
            'coffeespoon', 'pound', 'lb', 'tbsp', 'plus', 'firmly', 'packed', 'lightly', 'level', 'even', 'rounded',
            'heaping', 'heaped', 'sifted', 'bushel', 'peck', 'stick', 'chopped', 'sliced', 'halves', 'shredded',
            'slivered', 'sliced', 'whole', 'paste', 'whole', ' fresh', 'peeled', 'diced', 'mashed', 'dried', 'frozen',
            'fresh', 'peeled', 'candied', 'no', 'pulp', 'crystallized', 'canned', 'crushed', 'minced', 'julienned',
            'clove', 'head', 'small', 'large', 'medium']
    measures = [WordNetLemmatizer().lemmatize(m) for m in measures]

    # type of dishes in ingedients - remove these
    data_leaks = ['italianstyle', 'french', 'thai', 'chinese', 'mexican', 'spanish', 'indian', 'italian']

    common_remove = ['ground', 'to', 'taste', 'and', 'or', 'can', 'into', 'cut', 'grated', 'leaf', 'package', 'finely',
                 'divided', 'a', 'piece', 'optional', 'inch', 'needed', 'more', 'drained', 'for', 'flake', 'dry',
                 'extract', 'thinly', 'cubed', 'bunch', 'cube', 'slice', 'pod', 'beaten', 'seeded', 'uncooked', 'root',
                 'plain', 'baking', 'heavy', 'halved', 'crumbled', 'sweet', 'with', 'hot', 'room', 'temperature',
                 'trimmed', 'allpurpose', 'deveined', 'bulk', 'seasoning', 'jar', 'food', 'if', 'bag', 'mix', 'in',
                 'each', 'roll', 'instant', 'double', 'such', 'frying', 'thawed', 'whipping', 'stock', 'rinsed', 'mild',
                 'sprig', 'freshly', 'toasted', 'link', 'boiling', 'cooked', 'unsalted', 'container',
                 'cooking', 'thin', 'lengthwise', 'warm', 'softened', 'thick', 'quartered', 'juiced', 'pitted', 'chunk',
                 'melted', 'cold', 'coloring', 'puree', 'cored', 'stewed', 'floret', 'coarsely', 'the', 'blanched',
                 'zested', 'sweetened', 'powdered', 'garnish', 'dressing', 'soup', 'at', 'active', 'lean', 'chip',
                 'sour', 'long', 'ripe', 'skinned', 'fillet', 'from', 'stem', 'flaked', 'removed', 'stalk',
                 'unsweetened', 'cover', 'crust', 'extra', 'prepared', 'blend', 'of', 'ring', 'undrained', 'about',
                 'zest', ' ', '', 'spray', 'round', 'herb', 'seasoned', 'wedge', 'bitesize', 'broken', 'square',
                 'freshly', 'thickly', 'diagonally']
    common_remove = [WordNetLemmatizer().lemmatize(c) for c in common_remove]
    data_leaks = [WordNetLemmatizer().lemmatize(d) for d in data_leaks]

    additional_remover = []
    f = open("datasets/additional_remover.txt", "r", encoding="utf8")
    for x in f:
        x.replace('\n', '')
        if x: 
            additional_remover.append(x)
    f.close()

    measures.extend(data_leaks) #type of cuisine removers
    measures.extend(common_remove) #common words
    measures.extend(additional_remover) #stop words file

    def title_search(self, query: str) -> list:
        db_connection = DbInstance()
        lst_recipe = list()
        recipe_score = dict()
        porter_stemmer = PorterStemmer()
        regex = re.compile('[^a-zA-Z0-9]')
        stopwords_list = [regex.sub('', word).lower() for word in open("datasets/englishST.txt").read().split()]
        collection_index = self.construct_dict(open("title_index.pickle"))
        lst_terms = self.title_prepocess(query, regex, porter_stemmer, stopwords_list)
        for term in lst_terms:
            self.get_weights_of_term_title(collection_index, term, recipe_score)
        sorted_tuples = sorted(recipe_score.items(), key=operator.itemgetter(1), reverse=True)
        lst_recipe_id = [int(x[0]) for x in sorted_tuples][:25]
        list_recipes = db_connection.get_recipe(lst_recipe_id)
        sorted_list_recipes = []
        for recipe_id in lst_recipe_id:
            for recipe in list_recipes:
                if recipe['id'] == recipe_id:
                    sorted_list_recipes.append(recipe)
        return sorted_list_recipes


    def title_prepocess(self, query, regex, porter_stemmer, stopwords_list) -> list:
        lst_terms = []
        lst_processed_terms = []
        for word in query.split():
            token = regex.sub('', word).lower()
            if token and token not in stopwords_list:
                lst_terms.append(token)
        term_bigrams = [x[0] + ' ' + x[1] for x in list(bigrams(lst_terms))]
        lst_terms.extend(term_bigrams)
        for term in lst_terms:
            processed_term = porter_stemmer.stem(term)
            if processed_term:
                lst_processed_terms.append(processed_term)
        return lst_processed_terms

    #Populate weight of term against all the documents the term appears in for a title query
    def get_weights_of_term_title(self, collection_index, term, recipe_score):
        for recipe_id in collection_index.get(term, []):
            if recipe_score.get(recipe_id):
                recipe_score[recipe_id] = round(recipe_score[recipe_id] + float(collection_index[term][recipe_id]), 4) + 7.4107
            else:
                recipe_score[recipe_id] = float(collection_index[term][recipe_id])
    
    #Populate weight of term against all the documents the term appears in for a ingredient query
    def get_weights_of_term_ing(self, collection_index, term, recipe_score):
        for recipe_id in collection_index.get(term, []):
            if recipe_score.get(recipe_id):
                recipe_score[recipe_id] = round(recipe_score[recipe_id] + float(collection_index[term][recipe_id]), 4) + 11.5442
            else:
                recipe_score[recipe_id] = float(collection_index[term][recipe_id])


    #Method to construct a dictionary data structure from the index file
    def construct_dict(self, file) -> dict:
        index_dict = {}
        doc_dict = {}
        key = ''
        for line in file:
            if not line.startswith('\t'):
                index_dict[key] = doc_dict
                key = line.split(':')[0] 
                doc_dict = {}
            else:
                doc_line = line.strip().split(':')
                doc_dict[doc_line[0]] = float(doc_line[1])
        return index_dict

    def query_preprocess(self, porter_stemmer, regex, stopwords_list, query: str) -> list:
        processed_query= []
        stemmed_terms = []
        for word in query.split():
            word.translate(str.maketrans('', '', string.punctuation))
            words = [''.join(c for c in w if c not in string.punctuation) for w in word.split()]
            words = [WordNetLemmatizer().lemmatize(w.lower()) for w in words if w.isalpha()]
            words = [w for w in words if w not in self.measures]
            for word in words:
                if word:
                    token = regex.sub('', word).lower()
                    if token and token not in stopwords_list:
                        processed_query.append(token)
        #create bigrams
        bgs = nltk.bigrams(processed_query)
        fdist = nltk.FreqDist(bgs)
        for k,v in fdist.items():
            bigram = k[0] + " " + k[1]
            processed_query.append(bigram)

        return processed_query

    def ingredient_search(self, query: str) -> list:
        db_connection = DbInstance()
        recipe_list = list()
        recipe_score = dict()
        porter_stemmer = PorterStemmer()
        regex = re.compile('[^a-zA-Z0-9]')
        stopwords_list = [regex.sub('', word).lower() for word in open("datasets/englishST.txt").read().split()]
        collection_index = self.construct_dict(open("ingredient_index.pickle", encoding='utf-8'))
        for word in self.query_preprocess(porter_stemmer, regex, stopwords_list, query):
            self.get_weights_of_term_ing(collection_index, word, recipe_score)
        sorted_tuples = sorted(recipe_score.items(), key=operator.itemgetter(1), reverse=True)
        lst_recipe_id = [int(x[0]) for x in sorted_tuples][:25]
        list_recipes = db_connection.get_recipe(lst_recipe_id)
        sorted_list_recipes = []
        for recipe_id in lst_recipe_id:
            for recipe in list_recipes:
                if recipe['id'] == recipe_id:
                    sorted_list_recipes.append(recipe)
        return sorted_list_recipes
         

riyf = RiyfLogic()
print(riyf.ingredient_search('beef in fridge pasta potato'))