from flask import Flask, render_template, jsonify, json, Response
from db import DbInstance
import sys
from bson import json_util

app = Flask(__name__)

@app.route('/')
def hello_world():
    return render_template('index.html')

@app.route('/getData')
def get_data():
    db_connection = DbInstance()
    test_data = db_connection.get_data()[0]
    return Response(json_util.dumps({'data' : test_data}), mimetype='application/json')

if __name__ == "__main__":   
    app.run()