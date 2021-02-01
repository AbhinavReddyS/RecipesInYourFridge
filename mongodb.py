# Import the required Python modules and Flask libraries
from flask import Flask
from flask_pymongo import PyMongo
from pymongo import MongoClient

# Configure the Flask application to connect with the MongoDB server
app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/SomeDatabase"
app.config['MONGO_DBNAME'] = 'SomeCollection'
app.config['SECRET_KEY'] = 'secret_key'

# Connect to MongoDB using Flask's PyMongo wrapper
mongo = PyMongo(app)
db = mongo.db
col = mongo.db["Some Collection"]

