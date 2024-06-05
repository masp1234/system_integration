import requests

html = requests.get("https://en.wikipedia.org/wiki/List_of_Monty_Python_projects").text


from bs4 import BeautifulSoup

html_parsed = BeautifulSoup(html, features="lxml")

tags = html_parsed.find("div", { "class": "mw-parser-output" })
print(tags)

projects = {}
current_category = None


for tag in tags:
    if tag.name == "h2":
        current_category = tag.text.replace("[edit]", "")
        projects[current_category] = []
    
    elif tag.name == "ul":
        for li in tag.find_all("li"):
            print(li.text)
            projects[current_category].append(li.text)
      

del projects["References"]
        