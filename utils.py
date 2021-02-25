from glob import glob
import json

def generate_unique_id():
    i=1
    for f_name in glob('C:/Users/Tej/Desktop/TTDS Project/raw_data/*.json'): #location of recipe jsons ( non -IDed)
        f = open(f_name, "r")
        data = json.loads(f.read())
        data["recipe_id"]=i
        i+=1
        with open('C:/Users/Tej/Desktop/TTDS Project/data/recipe_'+str(i)+'.json', 'w') as outfile: #location of recipe jsons (IDed)
            json.dump(data, outfile)
    print("recipes data IDed")

def generate_recipes_json():
    entries = []
    i = 1
    for f_name in glob('C:/Users/Tej/Desktop/TTDS Project/data/*.json'):  #location where all recipe json files are located
        f = open(f_name, "r")
        data = json.loads(f.read())
        entry = {}
        if 'recipe_url' in data:
            entry['recipe_url'] = data['recipe_url']
        else:
            entry['recipe_url'] = None
        if 'recipe_id' in data:
            entry['recipe_id'] = data['recipe_id']
        else:
            entry['recipe_id'] = None
        if 'title' in data:
            entry['title'] = data['title']
        else:
            entry['title'] = None
        if 'photo_url' in data:
            entry['photo_url'] = data['photo_url']
        else:
            entry['photo_url'] = None
        if 'cooking_time' in data:
            entry['cooking_time'] = data['cooking_time']
        else:
            entry['cooking_time'] = None
        if 'serving_size' in data:
            entry['serving_size'] = data['serving_size']
        else:
            entry['serving_size'] = None
        if 'meal_type' in data:
            entry['meal_type'] = data['meal_type']
        else:
            entry['meal_type'] = None
        if 'cuisine' in data:
            entry['cuisine'] = data['cuisine']
        else:
            entry['cuisine'] = None
        if 'recipe_rating' in data:
            entry['recipe_rating'] = data['recipe_rating']
        else:
            entry['recipe_rating'] = None
        i += 1
        print(i)
        entries.append(entry)
    with open('recipes.json', 'w') as f:
        json.dump(entries, f)

generate_recipes_json()