from fastapi import FastAPI

app = FastAPI()

@app.get("/fastapiData")
def serve_data():
    return { "message": [1, 2, 3, 4, 5] }