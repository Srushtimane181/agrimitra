import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { apiRequest } from "../services/api";

function CropDetails() {
  const { id } = useParams();

  const [crop, setCrop] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCrop = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await apiRequest(`/crops/${id}`);

        setCrop(data.crop || data);
      } catch (err) {
        console.error("Error fetching crop details:", err);
        setError(err.message || "Unable to load crop details.");
      } finally {
        setLoading(false);
      }
    };

    fetchCrop();
  }, [id]);

  if (loading) {
    return (
      <div className="crop-details-page">
        <header className="dashboard-header">
          <h1>🌱 AgriMitra</h1>
          <Link to="/crops">← Back to Crops</Link>
        </header>

        <main className="crop-details-content">
          <p>Loading crop details... 🌱</p>
        </main>
      </div>
    );
  }

  if (error || !crop) {
    return (
      <div className="not-found">
        <h2>Crop not found</h2>
        <p>{error}</p>
        <Link to="/crops">← Back to Crops</Link>
      </div>
    );
  }

  return (
    <div className="crop-details-page">
      <header className="dashboard-header">
        <h1>🌱 AgriMitra</h1>

        <Link to="/crops">← Back to Crops</Link>
      </header>

      <main className="crop-details-content">
        <div className="crop-details-card">
          <div className="large-crop-emoji">
            {crop.emoji || "🌾"}
          </div>

          <h2>{crop.name}</h2>

          <p className="crop-description">
            {crop.description}
          </p>

          <div className="crop-information">
            <div>
              <strong>🌱 Soil:</strong>
              <p>{crop.suitableSoil}</p>
            </div>

            <div>
              <strong>📅 Sowing Season:</strong>
              <p>{crop.season}</p>
            </div>

            <div>
              <strong>💧 Water Requirement:</strong>
              <p>{crop.waterRequirement}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CropDetails;