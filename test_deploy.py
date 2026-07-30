import requests

url = "https://housepriceapi-production-ecc5.up.railway.app/predict"

data = {
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
    "carpet_area_sqft": 1200
}

response = requests.post(url, json=data)
print("Status Code:", response.status_code)
print("Response:", response.json())