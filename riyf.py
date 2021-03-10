import json
import pickle
import re
from nltk.stem import PorterStemmer
from db import DbInstance
import sys

class RiyfLogic:

    def title_search(self, query: str) -> list:
        db_connection = DbInstance()
        lst_recipe = list()
        recipe_score = dict()
        porter_stemmer = PorterStemmer()
        regex = re.compile('[^a-zA-Z0-9]')
        stopwords_list = [regex.sub('', word).lower() for word in open("datasets/englishST.txt").read().split()]
        collection_index = construct_dict(open("title_index.pickle"))
        for word in query.split():
            term = title_prepocess(word, regex, porter_stemmer, stopwords_list)
            if not term:
                continue
            get_weights_of_term_title(collection_index, term, recipe_score)
        for recipe_id in sorted(recipe_score, key=recipe_score.get, reverse=True):
            lst_recipe.append(db_connection.get_recipe(recipe_id))
            if lst_recipe.count > 20:
                break
        return lst_recipe

    def title_prepocess(self, word, regex, porter_stemmer, stopwords_list) -> str:
        if not word:
            return None
        token = regex.sub('', word).lower()
        if token and token not in stopwords_list:
            return porter_stemmer.stem(token)
        return ''

    #Populate weight of term against all the documents the term appears in for a title query
    def get_weights_of_term_title(self, collection_index, term, recipe_score):
        for recipe_id in collection_index[term]:
            if recipe_score.get(recipe_id):
                recipe_score[recipe_id] = round(recipe_score[recipe_id] + collection_index[term][recipe_id], 4)
            else:
                recipe_score[recipe_id] = collection_index[term][recipe_id]

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
                doc_dict[doc_line[0]] = doc_line[1]
        return index_dict

    def ingredient_search(self, query: str) -> list:
        db_connection = DbInstance()
        #read pickle file as a json object
        #perform query processing
        #sum tfidf score of each term in query from the index for each recipe id
        #for each of recipe_id obtanined retrieve recipe info from db
        #return list of recipes
        return [query]