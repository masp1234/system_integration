from fastapi import FastAPI
import requests
app = FastAPI()


# returnerer dict, som bliver konverteret til JSON. List i python, Array i JSON
@app.get("/fastApiData")
def _():
    return { "message": [1, 2, 3, 4, 5] }

@app.get("/expressData")
def express_data():
     response = requests.get('http://127.0.0.1:8080/expressData')
     jsonResponse = response.json()
     
     return { "message" : jsonResponse }
     
