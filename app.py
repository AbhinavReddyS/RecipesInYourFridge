from flask import Flask, render_template, jsonify
from db import DbInstance
import sys

app = Flask(__name__)

@app.route('/')
def hello_world():
    return render_template('index.html')

@app.route('/getData')
def get_data():
    db_connection = DbInstance()
    test_data = db_connection.get_data()
    return str(test_data)

if __name__ == "__main__":   
    app.run()