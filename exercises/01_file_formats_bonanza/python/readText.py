people = []

with open('../data/text.txt') as file:
    for line in file:
        personData = line.split(' ')
        people.append({
            'firstName': personData[0],
            'lastName': personData[1],
            'age': personData[2].rstrip()
            })
        
print(people)
