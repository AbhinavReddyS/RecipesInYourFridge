from glob import glob
import json

def generate_ingredients_json():
    unique_ingredients = []
    list = open("unique_ingredients", "r", encoding='utf-8').readlines()
    k=1
    for name in list:
        ing={}
        ing['name'] = name.strip()
        ing['id'] = k
        k+=1
        unique_ingredients.append(ing)

    with open('ingredients.json', 'w') as f:
        json.dump(unique_ingredients, f)


source= 'C:/Users/Tej/Downloads/common_output_03222021/common_output_03222021/*.json'
def generate_unique_id():
    i=1
    for f_name in glob(source): #location of recipe jsons ( non -IDed)
        f = open(f_name, "r")
        data = json.loads(f.read())
        data["id"]=i
        i+=1
        with open(f_name, 'w') as outfile: #location of recipe jsons (IDed)
            json.dump(data, outfile)


def generate_recipes_json():
    entries = []
    i = 1
    for f_name in glob(source):  #location where all recipe json files are located
        f = open(f_name, "r")
        data = json.loads(f.read())
        entry = {}
        #Source ID
        if 'source_id' in data:
            entry['source_id'] = data['source_id']
        else:
            entry['source_id'] = None

        #Recipe URL
        if 'recipe_url' in data:
            entry['recipe_url'] = data['recipe_url']
        else:
            entry['recipe_url'] = None

        #Recipe ID
        if 'recipe_id' in data:
            entry['recipe_id'] = data['recipe_id']
        else:
            entry['recipe_id'] = None

        #ID
        if 'id' in data:
            entry['id'] = data['id']
        else:
            entry['id'] = None

        #Title
        if 'title' in data:
            entry['title'] = data['title']
        else:
            entry['title'] = None


        #Difficulty Level
        if 'difficulty_level' in data:
            entry['difficulty_level'] = data['difficulty_level']
        else:
            entry['difficulty_level'] = None

        #Photo URL
        if 'photo_url' in data:
            entry['photo_url'] = data['photo_url']
        elif 'photo' in data:
            entry['photo_url'] = data['photo']
        else:
            entry['photo_url'] = None

        #Serving Size
        if 'serving_size' in data:
            entry['serving_size'] = data['serving_size']
        else:
            entry['serving_size'] = None

        #Cooking time
        if 'cooking_time' in data:
            entry['cooking_time'] = data['cooking_time']
        else:
            entry['cooking_time'] = None

        #Other Serving Size
        if 'other_serving_size' in data:
            entry['other_serving_size'] = data['other_serving_size']
        else:
            entry['other_serving_size'] = None

        #Cuisine
        if 'cuisine' in data:
            entry['cuisine'] = data['cuisine']
        else:
            entry['cuisine'] = None

        #Recipe Rating
        if 'recipe_rating' in data:
            entry['recipe_rating'] = data['recipe_rating']
        elif 'rating' in data:
            entry['recipe_rating'] = data['rating']
        else:
            entry['recipe_rating'] = None

        entries.append(entry)
        i+=1
        print(i)
    with open('recipes.json', 'w') as f:
        json.dump(entries, f)

generate_unique_id()
print("Unique Ids are Generated.")

generate_recipes_json()
print("Recipes JSON is Generated.")

# generate_ingredients_json()
# print("Ingredients JSON is Generated.")