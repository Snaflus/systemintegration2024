from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
    return {"Hello": "World"}

@app.get("/firstRoute")
def root():
    return {"Hello": "First Route"}
