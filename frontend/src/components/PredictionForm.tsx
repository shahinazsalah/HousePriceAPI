import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { predictPrice } from "../api/predictionClient";
import type { HouseData } from "../types/prediction";

const LOCATIONS = [
  "kochi",
  "mumbai",
  "delhi",
  "bangalore",
  "hyderabad",
  "chennai",
  "pune",
  "kolkata",
];

const TRANSACTIONS = ["Resale", "New Property"];
const FURNISHINGS = ["Furnished", "Semi-Furnished", "Unfurnished"];
const FACINGS = [
  "North - East",
  "East",
  "West",
  "North",
  "South",
  "South - East",
  "North - West",
  "South - West",
];
const OWNERSHIPS = [
  "Freehold",
  "Leasehold",
  "Co-operative Society",
  "Power of Attorney",
];

export const PredictionForm: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState<HouseData>({
    location: "kochi",
    Floor: 1,
    Transaction: "Resale",
    Furnishing: "Furnished",
    facing: "North - East",
    overlooking: "Garden/Park, Main Road",
    Bathroom: 2,
    Balcony: 1,
    Car_Parking: 1,
    Ownership: "Freehold",
    carpet_area_sqft: 1000,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? (value === "" ? 0 : Number(value)) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (formData.carpet_area_sqft <= 0) {
      setError("Please enter a valid Carpet Area in SqFt.");
      setLoading(false);
      return;
    }

    try {
      const result = await predictPrice(formData);
      navigate("/result", {
        state: {
          predictedPrice: result["Predicted Price"],
          details: formData,
        },
      });
    } catch (err: any) {
      setError(
        err?.response?.data?.detail ||
          "Failed to get price prediction. Please check your connection and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <h2>Property Details</h2>
      <p className="form-subtitle">Fill in the specifications below to estimate the price.</p>

      {error && <div className="error-alert">{error}</div>}

      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <select
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          >
            {LOCATIONS.map((loc) => (
              <option key={loc} value={loc}>
                {loc.charAt(0).toUpperCase() + loc.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="carpet_area_sqft">Carpet Area (SqFt)</label>
          <input
            type="number"
            id="carpet_area_sqft"
            name="carpet_area_sqft"
            value={formData.carpet_area_sqft}
            onChange={handleChange}
            min="100"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="Floor">Floor</label>
          <input
            type="number"
            id="Floor"
            name="Floor"
            value={formData.Floor}
            onChange={handleChange}
            min="0"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="Bathroom">Bathrooms</label>
          <input
            type="number"
            id="Bathroom"
            name="Bathroom"
            value={formData.Bathroom}
            onChange={handleChange}
            min="1"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="Balcony">Balconies</label>
          <input
            type="number"
            id="Balcony"
            name="Balcony"
            value={formData.Balcony}
            onChange={handleChange}
            min="0"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="Car_Parking">Car Parking</label>
          <input
            type="number"
            id="Car_Parking"
            name="Car_Parking"
            value={formData.Car_Parking}
            onChange={handleChange}
            min="0"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="Transaction">Transaction Type</label>
          <select
            id="Transaction"
            name="Transaction"
            value={formData.Transaction}
            onChange={handleChange}
          >
            {TRANSACTIONS.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="Furnishing">Furnishing Status</label>
          <select
            id="Furnishing"
            name="Furnishing"
            value={formData.Furnishing}
            onChange={handleChange}
          >
            {FURNISHINGS.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="facing">Facing Direction</label>
          <select
            id="facing"
            name="facing"
            value={formData.facing}
            onChange={handleChange}
          >
            {FACINGS.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="Ownership">Ownership Type</label>
          <select
            id="Ownership"
            name="Ownership"
            value={formData.Ownership}
            onChange={handleChange}
          >
            {OWNERSHIPS.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group full-width">
          <label htmlFor="overlooking">Overlooking View</label>
          <input
            type="text"
            id="overlooking"
            name="overlooking"
            value={formData.overlooking}
            onChange={handleChange}
            placeholder="e.g. Garden/Park, Main Road"
            required
          />
        </div>
      </div>

      <button type="submit" className="submit-btn" disabled={loading}>
        {loading ? (
          <span className="btn-loader">
            <span className="spinner"></span> Predicting...
          </span>
        ) : (
          "Predict Price"
        )}
      </button>
    </form>
  );
};