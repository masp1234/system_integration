import json

def parse_json(path):
    file = open(path)
    data = json.load(file)
    return data