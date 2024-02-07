import xml.etree.ElementTree as ET

tree = ET.parse('../data/text.xml')
peopleElements = tree.getroot().findall('person')

people = [ {child.tag: child.text for child in person} for person in peopleElements]

print(people)