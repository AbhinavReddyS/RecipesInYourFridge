from flask import Flask, render_template, jsonify, json, Response
from db import DbInstance
from riyf import RiyfLogic
import sys
from bson import json_util

app = Flask(__name__)

@app.route('/')
def hello_world():
    return render_template('index.html')

@app.route('/getData')
def get_data():
    riyf_processor = RiyfLogic()
    test_data = riyf_processor.get_data()
    return Response(json_util.dumps({'data' : test_data}), mimetype='application/json')

if __name__ == "__main__":   
    app.run()