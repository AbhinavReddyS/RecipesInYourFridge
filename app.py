from flask import Flask, render_template, request, jsonify
from db import DbInstance
from riyf import RiyfLogic
import sys
app = Flask(__name__)

@app.route('/')
def hello_world():
    return render_template('index.html')

@app.route('/ISearch', methods=['POST'])
def ingredient_search():
    _processor = RiyfLogic()
    text = request.data.decode()
    return jsonify(_processor.ingredient_search(text))

@app.route('/getRecipes')
def get_all_recipes():
    db_connection = DbInstance()
    data = db_connection.get_recipes()
    return str(data)

@app.route('/getIngredients')
def get_all_ingredients():
    db_connection = DbInstance()
    data = db_connection.get_ingredients()
    return str(data)

@app.route('/deleteRecCol')
def delete_recipes_collection():
    db_connection = DbInstance()
    value = db_connection.delete_recipe_col()
    print(value)
    if value:
        return "Recipes Collection deleted successfully"
    else:
        return "Recipes Collection does not exist"

@app.route('/deleteIngCol')
def delete_ing_collection():
    db_connection = DbInstance()
    value = db_connection.delete_ingredient_col()
    print(value)
    if value:
        return "Ingredients Collection deleted successfully"
    else:
        return "Ingredients Collection does not exist"

@app.route('/uploadRecipes')
def upload_data():
    db_connection = DbInstance()
    db_connection.upload_recipes()
    return "Recipes uploaded Successfully"

@app.route('/uploadIngredients')
def upload_ingredients():
    db_connection = DbInstance()
    db_connection.upload_ingredients()
    return "Ingredients uploaded Successfully"

if __name__ == "__main__":
    app.run()