import { Link } from "react-router-dom";

function Schemes() {
  const schemes = [
    {
      id: "pm-kisan",
      name: "PM-KISAN",
      emoji: "💰",
      category: "Financial Support",
      description:
        "Financial assistance scheme for eligible farmer families.",
    },
    {
      id: "pm-fasal-bima",
      name: "PM Fasal Bima Yojana",
      emoji: "🛡️",
      category: "Crop Insurance",
      description:
        "Crop insurance support against specified crop losses and risks.",
    },
    {
      id: "kisan-credit-card",
      name: "Kisan Credit Card",
      emoji: "💳",
      category: "Agricultural Credit",
      description:
        "Provides farmers access to agricultural credit facilities.",
    },
    {
      id: "soil-health-card",
      name: "Soil Health Card",
      emoji: "🌱",
      category: "Soil Management",
      description:
        "Provides information about soil health and recommended nutrients.",
    },
  ];

  return (
    <div className="schemes-page">
      <header className="dashboard-header">
        <h1>🌱 AgriMitra</h1>

        <Link to="/dashboard">← Dashboard</Link>
      </header>

      <main className="schemes-content">
        <h2>📋 Government Schemes</h2>

        <p className="page-description">
          Explore agricultural schemes and support programs that may be
          useful for farmers.
        </p>

        <div className="scheme-grid">
          {schemes.map((scheme) => (
            <Link
              key={scheme.id}
              to={`/schemes/${scheme.id}`}
              className="scheme-card"
            >
              <div className="scheme-emoji">{scheme.emoji}</div>

              <h3>{scheme.name}</h3>

              <p className="scheme-category">
                {scheme.category}
              </p>

              <p>{scheme.description}</p>

              <span>View Details →</span>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Schemes;