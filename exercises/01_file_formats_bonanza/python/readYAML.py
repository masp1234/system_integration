import yaml

with open('../data/text.yaml') as file:
    data = yaml.safe_load(file)
 
print(data['people'])
