from flask import Flask, render_template
from db import DbInstance
import sys

app = Flask(__name__)

@app.route('/')
def hello_world():
    db_connection = DbInstance()
    test_data = db_connection.get_data()
    return render_template('index.html', data = test_data)

if __name__ == "__main__":   
    app.run()