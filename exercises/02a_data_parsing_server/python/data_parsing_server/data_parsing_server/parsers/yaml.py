import yaml

def parse_yaml(path):
    with open(path) as file:
        data = yaml.safe_load(file)
        return data