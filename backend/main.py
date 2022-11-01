from fastapi import FastAPI
from db_handler import DBHandler

app = FastAPI()
db_handler = DBHandler()

@app.get("/table")
async def root():
    return {"message": db_handler.get_all_test_rows()}
