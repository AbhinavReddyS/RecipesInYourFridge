import json
import pandas as pd
from glob import glob
import numpy as np
import string
import nltk
from nltk.stem import WordNetLemmatizer


dataset = []

for f_name in glob('D:/Sem 1/TTDS/data/recipe_1.json'):
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

def indexer(dataset):
    index = []
    for recipe in dataset:
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
        print(preprocessed_ingredients)
        #calculate the term frquency of the terms in preprocessed_ingredients in the 
        #preprocessed string variable text
        #and push the tupel (recipe_id,freq) into index
            
indexer(dataset)

"""
Desired output a dict()
term(1):
    (recipe_id(1), term_frequency(1))
    (recipe_id(2), term_frequency(2))
term(2):
    (recipe_id(1), term_frequency(1))
    (recipe_id(2), term_frequency(2))
"""
