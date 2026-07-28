# 🏠 House Price Prediction API

A Machine Learning project that predicts house prices using property features. The final model was trained using Scikit-learn and deployed with FastAPI.

---

# 📌 Project Overview

This project predicts house prices using the following features:

- Location
- Floor
- Transaction
- Furnishing
- Facing
- Overlooking
- Bathroom
- Balcony
- Car Parking
- Ownership
- Carpet Area (sqft)

The final deployed model is a **Random Forest Regressor** wrapped inside a Scikit-learn Pipeline.

---

# 🛠 Technologies Used

- Python
- Pandas
- NumPy
- Scikit-learn
- FastAPI
- Joblib
- Uvicorn
- Matplotlib
- Seaborn

---

# 🤖 Machine Learning Models

Models evaluated:

- Linear Regression
- Random Forest Regressor

The Random Forest model achieved the best performance and was selected for deployment.

---

# 📊 Model Performance

| Model | R² Score |
|--------|----------|
| Linear Regression | 0.14 |
| Random Forest | 0.17 |

---

# 📂 Project Structure

```text
HousePriceAPI
│
├── main.py
├── House_Price_Prediction.ipynb
├── requirements.txt
├── README.md
├── .gitignore
├── house_price_random_forest.pkl
└── dataset.csv
```

---

# 🚀 Installation

Clone the repository

```bash
git clone https://github.com/shahinazsalah/HousePriceAPI.git
```

Install dependencies

```bash
pip install -r requirements.txt
```

---

# ▶️ Run the API

```bash
uvicorn main:app --reload
```

---

# 🌐 API Endpoints

## Home

```
GET /
```

Response

```json
{
  "message": "House Price Prediction API is Running!"
}
```

---

## Model Status

```
GET /model
```

Response

```json
{
  "status": "Random Forest Model Loaded Successfully"
}
```

---

## Predict

```
POST /predict
```

Example Request

```json
{
  "location": "kochi",
  "Floor": 10,
  "Transaction": "Resale",
  "Furnishing": "Furnished",
  "facing": "North - East",
  "overlooking": "Garden/Park, Main Road",
  "Bathroom": 3,
  "Balcony": 2,
  "Car_Parking": 1,
  "Ownership": "Freehold",
  "carpet_area_sqft": 1450
}
```

Example Response

```json
{
  "Predicted Price": 9570883.28
}
```

---

# 📖 API Documentation

After running the server, open

```
http://127.0.0.1:8000/docs
```

to access the interactive Swagger UI.

---

# 👩‍💻 Author

**Shahinaz Salah**

Data Science & AI Student

GitHub:
https://github.com/shahinazsalah