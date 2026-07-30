export interface HouseData {
  location: string;
  Floor: number;
  Transaction: string;
  Furnishing: string;
  facing: string;
  overlooking: string;
  Bathroom: number;
  Balcony: number;
  Car_Parking: number;
  Ownership: string;
  carpet_area_sqft: number;
}

export interface PredictionResponse {
  "Predicted Price": number;
}