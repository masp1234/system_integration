from flask import Flask
from parsers import parse_csv, parse_yaml, parse_xml, parse_txt, parse_json

app = Flask(__name__)

@app.route('/csv')
def csv():
    data = parse_csv('./data/text.csv')
    return data

@app.route('/txt')
def txt():
    data = parse_txt('./data/text.txt')
    return data

@app.route('/yaml')
def yaml():
    data = parse_yaml('./data/text.yaml')
    return data

@app.route('/xml')
def xml():
    data = parse_xml('./data/text.xml')
    return data

@app.route('/json')
def json():
    data = parse_json('./data/text.json')
    return data

app.run()

