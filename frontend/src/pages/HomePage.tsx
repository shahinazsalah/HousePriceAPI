import React from "react";
import { PredictionForm } from "../components/PredictionForm";

export const HomePage: React.FC = () => {
  return (
    <div className="page-container">
      <header className="page-header">
        <div className="brand-badge">🏡 ML Real Estate Tool</div>
        <h1>House Price Prediction</h1>
        <p>Estimate property market value instantly using machine learning.</p>
      </header>
      <main className="page-content">
        <PredictionForm />
      </main>
    </div>
  );
};