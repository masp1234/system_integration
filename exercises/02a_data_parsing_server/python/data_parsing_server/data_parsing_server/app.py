from flask import Flask
from parsers import parse_csv

app = Flask(__name__)

@app.route('/csv')
def csv():
    data = parse_csv('./data/text.csv')
    print(data)
    return data

@app.route('/txt')
def txt():
    data = parse_txt('./data/text.txt')
    return

app.run(debug=True)

