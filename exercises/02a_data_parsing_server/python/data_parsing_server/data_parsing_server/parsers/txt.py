def parse_txt(path):
    people = []

    with open(path) as file:
        for line in file:
            personData = line.split(' ')
            people.append({
                'firstName': personData[0],
                'lastName': personData[1],
                'age': personData[2].rstrip()
                })
    return people