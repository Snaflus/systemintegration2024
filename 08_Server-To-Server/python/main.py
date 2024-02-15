from fastapi import FastAPI
import requests

app = FastAPI()

@app.get("/fastapiData")
def serve_data():
    return { "data": [1, 2, 3, 4, 5] }

@app.get("/requestExpress")
def get_data():
    response = requests.get("http://localhost:8080/expressData")
    return { "data": response.json() }