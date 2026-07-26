# 🏠 House Price Prediction API

A Machine Learning project that predicts house prices using property features. The model was trained with Scikit-learn and deployed using FastAPI.

---

# 📌 Project Overview

This project predicts house prices based on several property features such as:

- Location
- Property Status
- Transaction Type
- Furnishing
- Facing
- Overlooking
- Society
- Number of Bathrooms
- Number of Balconies
- Ownership
- Super Area
- Carpet Area
- Parking Spaces
- Floor Number

The trained model is served through a FastAPI REST API.

---

# 🛠 Technologies Used

- Python
- Pandas
- NumPy
- Scikit-learn
- FastAPI
- Joblib
- Uvicorn

---

# 🤖 Machine Learning Models

The following models were trained and evaluated:

- Linear Regression
- Random Forest Regressor

Random Forest achieved the best performance and was selected as the final model.

---

# 📊 Model Performance

| Model | R² Score |
|--------|----------|
| Linear Regression | 0.140 |
| Random Forest | 0.174 |

---

# 📂 Project Structure

```text
HousePriceAPI
│
├── app.py
├── requirements.txt
├── README.md
├── .gitignore
└── house_price_model.pkl
```

> Note: The trained model (`house_price_model.pkl`) is not included in this repository because its size exceeds GitHub's file size limit.

---

# 🚀 Installation

Clone the repository:

```bash
git clone https://github.com/shahinazsalah/HousePriceAPI.git
```

Install dependencies:

```bash
pip install -r requirements.txt
```

---

# ▶️ Run the API

```bash
uvicorn app:app --reload
```

---

# 🌐 API Endpoints

## Home

```
GET /
```

Returns:

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

Returns:

```json
{
  "status": "Model Loaded Successfully"
}
```

---

## Predict House Price

```
POST /predict
```

Example Request:

```json
{
  "location": "new-delhi",
  "Status": "Ready to Move",
  "Transaction": "Resale",
  "Furnishing": "Semi-Furnished",
  "facing": "East",
  "overlooking": "Main Road",
  "Society": "Nest Harmony",
  "Bathroom": 2,
  "Balcony": 2,
  "Ownership": "Freehold",
  "Super_Area": "1200 sqft",
  "carpet_area_sqft": 1000,
  "parking_spaces": 1,
  "floor_number": 3
}
```

Example Response:

```json
{
  "Predicted Price": 1729717.64
}
```

---

# 📖 API Documentation

After running the server, open:

```
http://127.0.0.1:8000/docs
```

FastAPI automatically generates interactive Swagger documentation.

---

# 👩‍💻 Author

**Shahinaz Salah**

Data Science & AI Student

GitHub:

https://github.com/shahinazsalah