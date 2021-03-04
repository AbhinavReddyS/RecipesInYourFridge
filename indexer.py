import json
import pandas as pd
from glob import glob
import numpy as np
import string
import re
import nltk
import math
from nltk.stem import WordNetLemmatizer
from nltk.stem import PorterStemmer


dataset = []
porter_stemmer = PorterStemmer()

for f_name in glob('D:/Sem 1/TTDS/data/*300.json'):
    f = open(f_name, "r")
    recipe = json.loads(f.read())
    dataset.append(recipe)

#region stopwords set
# Source for list below
# https://en.wikipedia.org/wiki/Cooking_weights_and_measures
measures = ['litrbes', 'liter', 'millilitres', 'mL', 'grams', 'g', 'kg', 'teaspoon', 'tsp', 'tablespoon', 'tbsp',
            'fluid', 'ounce', 'oz', 'fl.oz', 'cup', 'pint', 'pt', 'quart', 'qt', 'gallon', 'gal', 'smidgen', 'drop',
            'pinch', 'dash', 'scruple', 'dessertspoon', 'teacup', 'cup', 'c', 'pottle', 'gill', 'dram', 'wineglass',
            'coffeespoon', 'pound', 'lb', 'tbsp', 'plus', 'firmly', 'packed', 'lightly', 'level', 'even', 'rounded',
            'heaping', 'heaped', 'sifted', 'bushel', 'peck', 'stick', 'chopped', 'sliced', 'halves', 'shredded',
            'slivered', 'sliced', 'whole', 'paste', 'whole', ' fresh', 'peeled', 'diced', 'mashed', 'dried', 'frozen',
            'fresh', 'peeled', 'candied', 'no', 'pulp', 'crystallized', 'canned', 'crushed', 'minced', 'julienned',
            'clove', 'head', 'small', 'large', 'medium']
lemmatizer = WordNetLemmatizer()
measures = [lemmatizer.lemmatize(m) for m in measures]

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
common_remove = [lemmatizer.lemmatize(c) for c in common_remove]
data_leaks = [lemmatizer.lemmatize(d) for d in data_leaks]

"""
#### Additional word remover text 
Around 45k additional words, of any character length, that occurs less than 50 times in all the 200k recipes included.
"""


additional_remover = []
f = open("additional_remover.txt", "r", encoding="utf8")
for x in f:
    x.replace('\n', '')
    if x: 
        additional_remover.append(x)
f.close()
#endregion

measures.extend(data_leaks) #type of cuisine removers
measures.extend(common_remove) #common words
measures.extend(additional_remover) #stop words file

def read_stop_words(filename):
    stop_words=[]
    with open(filename, 'r') as f:
        for line in f:
            for word in line.split():
                stop_words.append(word)
    return stop_words

stop_words = read_stop_words('datasets/englishST.txt')

#Method to create an index for the ingredient titles
def ingr_indexer(dataset):
    index = dict()
    for recipe in dataset:
        text_list = []
        if(recipe["instructions"] == None or recipe["title"] == None):
            continue 
        text = recipe["title"] + ' ' + ' '.join(recipe["instructions"])
        preprocessed_ingredients = list()
        for ingredient in recipe["ingredients"]:
                ingredient.translate(str.maketrans('', '', string.punctuation))
                words = [''.join(c for c in word if c not in string.punctuation) for word in ingredient.split()]
                words = [lemmatizer.lemmatize(word.lower()) for word in words if word.isalpha()]
                words = [word for word in words if word not in measures]

                if (len(words) < 3):
                    preprocessed_ingredients.append(' '.join(words))
                for word in words:
                    if len(word) > 1:
                        preprocessed_ingredients.append(word)
        preprocessed_ingredients = [ingredient for ingredient in set(preprocessed_ingredients) if ingredient is not None]
        text_list = [word.strip(",.") for word in text.split()]
        processed_text_list = []
        for token in text_list:
            if token not in stop_words:
                if token.isalpha():
                    processed_text_list.append(lemmatizer.lemmatize(token.lower()))

        #create bigrams
        bgs = nltk.bigrams(processed_text_list)
        fdist = nltk.FreqDist(bgs)
        for k,v in fdist.items():
            bigram = k[0] + " " + k[1]
            processed_text_list.append(bigram)
         
        for ingredient in preprocessed_ingredients:
            if processed_text_list.count(ingredient) != 0:
                if ingredient in index.keys():
                    index[ingredient].update({recipe["recipe_id"]: processed_text_list.count(ingredient)})
                else:
                    index[ingredient] = {recipe["recipe_id"]: processed_text_list.count(ingredient)}
  
    update_index_tfidf(index)
    output_index_to_file(index, "ingredient_index.pickle")

#Method to create an index for the recipe titles
def title_indexer(dataset):
    stopwords = open("datasets/englishST.txt").read().split()

    indexed_terms = dict()
    for recipe in dataset:
        title = recipe["title"]
        doc_id = recipe["recipe_id"]
        if title:
            preprocess_title(doc_id, title, stopwords, indexed_terms)

    update_index_tfidf(indexed_terms)
    output_index_to_file(indexed_terms, "title_index.pickle")

#Preprocess - tokenization, stopword removal and stemming
def preprocess_title(doc_id, text, stopwords, indexed_terms):
    regex = re.compile('[^a-zA-Z0-9\']')
    for word in text.split():
        token = regex.sub('', word).lower()
        if token and token not in stopwords:
            term = porter_stemmer.stem(token)
            if term in indexed_terms:
                term_freq = indexed_terms[term].get(doc_id, 0) + 1
                indexed_terms[term].update({doc_id : term_freq})
            else:
                indexed_terms.setdefault(term, {doc_id : 1})

#Calculates TFIDF score given tf, df and N
def weight_term_doc(term_freq, document_freq, N):
    return round((1 + math.log10(term_freq)) * (math.log10(N/document_freq)), 4) 

#Replace term freq with tfidf score in the index
def update_index_tfidf(index):
    N = len(dataset)
    for key in index:
        doc_freq = len(index[key])
        for doc_id in index[key]:
            term_freq = index[key][doc_id]
            index[key][doc_id] = weight_term_doc(term_freq, doc_freq, N)

#writing index to an output pickle file
def output_index_to_file(index, filename):
    output_file = open(filename, "w")
    for term in index:
        output_file.write(term + ":\n")
        for document in index[term]:
            output_file.write("\t" + str(document) + ": " + str(index[term][document]) + "\n")
    output_file.close()

if __name__ == "__main__":
    sw = input("Select Choice:\n1)Index for Ingredients\n2)Index for Titles\n")
    if sw == '1':
        ingr_indexer(dataset)
    elif sw == '2':
        title_indexer(dataset)
    else:
        print("Select proper choice")

