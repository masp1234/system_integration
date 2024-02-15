import csv

def parse_csv(path):
    with open(path) as file:
        csv_reader = csv.DictReader(file)
        people = [person for person in csv_reader]
        return people