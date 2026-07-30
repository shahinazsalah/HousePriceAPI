import React from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import type { HouseData } from "../types/prediction";

interface LocationState {
  predictedPrice: number;
  details: HouseData;
}

export const ResultPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as LocationState | null;

  if (!state || state.predictedPrice === undefined) {
    return (
      <div className="page-container centered">
        <div className="result-card error-card">
          <h2>No Prediction Data Found</h2>
          <p>Please submit the prediction form first.</p>
          <button className="primary-btn" onClick={() => navigate("/")}>
            Go to Form
          </button>
        </div>
      </div>
    );
  }

  const formattedPrice = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(state.predictedPrice);

  return (
    <div className="page-container">
      <div className="result-wrapper">
        <div className="result-card">
          <div className="success-badge">✓ Prediction Complete</div>
          <span className="result-label">Estimated Property Price</span>
          <h1 className="predicted-price">{formattedPrice}</h1>

          <div className="divider" />

          <h3>Property Summary</h3>
          <div className="summary-grid">
            <div className="summary-item">
              <span>Location:</span>
              <strong>{state.details.location}</strong>
            </div>
            <div className="summary-item">
              <span>Area:</span>
              <strong>{state.details.carpet_area_sqft} SqFt</strong>
            </div>
            <div className="summary-item">
              <span>Floor:</span>
              <strong>{state.details.Floor}</strong>
            </div>
            <div className="summary-item">
              <span>Bathrooms:</span>
              <strong>{state.details.Bathroom}</strong>
            </div>
            <div className="summary-item">
              <span>Furnishing:</span>
              <strong>{state.details.Furnishing}</strong>
            </div>
            <div className="summary-item">
              <span>Ownership:</span>
              <strong>{state.details.Ownership}</strong>
            </div>
          </div>

          <div className="actions">
            <Link to="/" className="primary-btn">
              Make Another Prediction
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};