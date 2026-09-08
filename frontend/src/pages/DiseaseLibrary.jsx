import { Link } from "react-router-dom";

function DiseaseLibrary() {
  const diseases = [
    {
      id: "rice-blast",
      name: "Rice Blast",
      emoji: "🌾",
      crop: "Rice",
      description: "A common fungal disease affecting rice plants.",
    },
    {
      id: "wheat-rust",
      name: "Wheat Rust",
      emoji: "🌾",
      crop: "Wheat",
      description: "A fungal disease that can reduce wheat crop yield.",
    },
    {
      id: "maize-leaf-blight",
      name: "Maize Leaf Blight",
      emoji: "🌽",
      crop: "Maize",
      description: "A fungal disease that affects maize leaves.",
    },
    {
      id: "tomato-blight",
      name: "Tomato Blight",
      emoji: "🍅",
      crop: "Tomato",
      description: "A common disease that affects tomato plants.",
    },
  ];

  return (
    <div className="diseases-page">
      <header className="dashboard-header">
        <h1>🌱 AgriMitra</h1>

        <Link to="/dashboard">← Dashboard</Link>
      </header>

      <main className="diseases-content">
        <h2>🦠 Crop Diseases</h2>

        <p className="page-description">
          Explore common crop diseases and learn basic information about them.
        </p>

        <div className="disease-grid">
          {diseases.map((disease) => (
            <Link
              key={disease.id}
              to={`/diseases/${disease.id}`}
              className="disease-card"
            >
              <div className="disease-emoji">{disease.emoji}</div>

              <h3>{disease.name}</h3>

              <p>
                <strong>Crop:</strong> {disease.crop}
              </p>

              <p>{disease.description}</p>

              <span>View Details →</span>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

export default DiseaseLibrary;