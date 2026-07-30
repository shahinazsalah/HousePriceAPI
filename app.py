from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import joblib
import pandas as pd
import numpy as np
from pydantic import BaseModel

app = FastAPI()

# ---------------------------------------------------------
# إضافة إعدادات CORS للسماح بالاتصال من الـ Frontend
# ---------------------------------------------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # يتيح لجميع المصادر الاتصال بالـ API
    allow_credentials=True,
    allow_methods=["*"],  # يتيح جميع أنواع الطلبات (POST, GET, OPTIONS, إلخ)
    allow_headers=["*"],
)

# Load the trained Random Forest Pipeline
model = joblib.load("house_price_random_forest.pkl")


class HouseInput(BaseModel):
    location: str
    Floor: float
    Transaction: str
    Furnishing: str
    facing: str
    overlooking: str
    Bathroom: float
    Balcony: float
    Car_Parking: float
    Ownership: str
    carpet_area_sqft: float


@app.get("/")
def home():
    return {
        "message": "House Price Prediction API is Running!"
    }


@app.get("/model")
def model_status():
    return {
        "status": "Random Forest Model Loaded Successfully"
    }


@app.post("/predict")
def predict(data: HouseInput):

    input_data = pd.DataFrame([{
        "location": data.location,
        "Floor": data.Floor,
        "Transaction": data.Transaction,
        "Furnishing": data.Furnishing,
        "facing": data.facing,
        "overlooking": data.overlooking,
        "Bathroom": data.Bathroom,
        "Balcony": data.Balcony,
        "Car Parking": data.Car_Parking,
        "Ownership": data.Ownership,
        "carpet_area_sqft": data.carpet_area_sqft
    }])

    prediction_log = model.predict(input_data)
    prediction = np.expm1(prediction_log)

    return {
        "Predicted Price": float(prediction[0])
    }