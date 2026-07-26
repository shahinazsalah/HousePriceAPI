from fastapi import FastAPI
import joblib
import pandas as pd
from pydantic import BaseModel
app = FastAPI()

# Load the trained model
model = joblib.load("house_price_model.pkl")
class HouseInput(BaseModel):
    location: str
    Status: str
    Transaction: str
    Furnishing: str
    facing: str
    overlooking: str
    Society: str
    Bathroom: float
    Balcony: float
    Ownership: str
    Super_Area: str
    carpet_area_sqft: float
    parking_spaces: float
    floor_number: float

@app.get("/")
def home():
    return {
        "message": "House Price Prediction API is Running!"
    }


@app.get("/model")
def model_status():
    return {
        "status": "Model Loaded Successfully"
    }

@app.post("/predict")
def predict(data: HouseInput):

    input_data = pd.DataFrame([{
        "location": data.location,
        "Status": data.Status,
        "Transaction": data.Transaction,
        "Furnishing": data.Furnishing,
        "facing": data.facing,
        "overlooking": data.overlooking,
        "Society": data.Society,
        "Bathroom": data.Bathroom,
        "Balcony": data.Balcony,
        "Ownership": data.Ownership,
        "Super Area": data.Super_Area,
        "carpet_area_sqft": data.carpet_area_sqft,
        "parking_spaces": data.parking_spaces,
        "floor_number": data.floor_number
    }])

    prediction = model.predict(input_data)

    return {
        "Predicted Price": float(prediction[0])
    }