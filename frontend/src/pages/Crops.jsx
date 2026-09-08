import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiRequest } from "../services/api";

function Crops() {
  const [crops, setCrops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCrops = async () => {
      try {
        setLoading(true);

        const data = await apiRequest("/crops");

        setCrops(data.crops || data);
      } catch (err) {
        console.error("Error fetching crops:", err);
        setError(err.message || "Unable to load crop information.");
      } finally {
        setLoading(false);
      }
    };

    fetchCrops();
  }, []);

  return (
    <div className="crops-page">
      <header className="dashboard-header">
        <h1>🌱 AgriMitra</h1>

        <Link to="/dashboard">← Dashboard</Link>
      </header>

      <main className="crops-content">
        <h2>🌾 Crop Information</h2>

        <p className="page-description">
          Select a crop to learn about its cultivation requirements and
          farming practices.
        </p>

        {loading && <p>Loading crop information... 🌱</p>}

        {error && <p className="error-message">{error}</p>}

        {!loading && !error && crops.length === 0 && (
          <p>No crop information available.</p>
        )}

        {!loading && !error && crops.length > 0 && (
          <div className="crop-grid">
            {crops.map((crop) => (
              <Link
                key={crop._id || crop.id}
                to={`/crops/${crop._id || crop.id}`}
                className="crop-card"
              >
                <div className="crop-emoji">
                  {crop.emoji || "🌾"}
                </div>

                <h3>{crop.name}</h3>

                <p>{crop.description}</p>

                <span>View Details →</span>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default Crops;