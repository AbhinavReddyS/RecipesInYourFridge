from glob import glob
import json

def generate_unique_id():
    i=1
    for f_name in glob('C:/Users/Tej/Downloads/Common_ouput v2 - 10032021/Common_ouput v2 - 10032021/*.json'): #location of recipe jsons ( non -IDed)
        f = open(f_name, "r")
        data = json.loads(f.read())
        data["recipe_id"]=i
        i+=1
        with open('C:/Users/Tej/Desktop/ttds_data/recipe_'+str(i)+'.json', 'w') as outfile: #location of recipe jsons (IDed)
            json.dump(data, outfile)
    print("recipes data IDed")

def generate_recipes_json():
    entries = []
    i = 1
    for f_name in glob('C:/Users/Tej/Desktop/ttds_data/*.json'):  #location where all recipe json files are located
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

        #Title
        if 'title' in data:
            entry['title'] = data['title']
        else:
            entry['title'] = None

        #Ingredients
        if 'ingredients' in data:
            entry['ingredients'] = data['ingredients']
        else:
            entry['ingredients'] = None

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

        #Meal Type
        if 'meal_type' in data:
            entry['meal_type'] = data['meal_type']
        else:
            entry['meal_type'] = None

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

#generate_unique_id()
generate_recipes_json()