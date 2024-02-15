import xml.etree.ElementTree as ET

def parse_xml(path):
    tree = ET.parse(path)
    peopleElements = tree.getroot().findall('person')

    people = [ {child.tag: child.text for child in person} for person in peopleElements]
    return people