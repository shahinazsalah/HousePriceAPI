# House Price Prediction API

A Machine Learning API built with FastAPI that predicts house prices using a trained Scikit-Learn model.

## Features
- Predict house prices
- FastAPI backend
- Swagger API documentation
- Machine Learning model with Joblib

## Installation

```bash
pip install -r requirements.txt
```

## Run

```bash
uvicorn app:app --reload
```

## API Endpoints

- GET /
- GET /model
- POST /predict

## Documentation

Open:

http://127.0.0.1:8000/docs