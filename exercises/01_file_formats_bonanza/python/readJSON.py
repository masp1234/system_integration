import json

file = open('../data/text.json')
data = json.load(file)
print(data)