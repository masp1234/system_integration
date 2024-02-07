import csv

with open('../data/text.csv') as file:
    csv_reader = csv.DictReader(file)
    people = [person for person in csv_reader]
    print(people)