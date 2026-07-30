import axios from "axios";
import type { HouseData, PredictionResponse } from "../types/prediction";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  "https://housepriceapi-production-ecc5.up.railway.app";

const API = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const predictPrice = async (
  data: HouseData
): Promise<PredictionResponse> => {
  const response = await API.post<PredictionResponse>("/predict", data);
  return response.data;
};