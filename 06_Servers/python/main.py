from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
    return { "message": "Welcome to our first server" }

@app.get("/1")
def _():
    return { "message": "Hello" }

@app.get("/firstRoute")
def first_route():
    return { "message " : "This is a message" }