import { Link } from "react-router-dom";

function FarmingTips() {
  const tips = [
    {
      id: 1,
      emoji: "🌱",
      title: "Soil Preparation",
      description:
        "Prepare the soil properly before planting to provide crops with suitable growing conditions.",
      points: [
        "Test the soil before cultivation.",
        "Remove unwanted weeds and crop residues.",
        "Use organic manure when required.",
        "Maintain proper soil moisture.",
      ],
    },
    {
      id: 2,
      emoji: "💧",
      title: "Water Management",
      description:
        "Proper water management helps maintain crop growth while avoiding unnecessary water usage.",
      points: [
        "Irrigate according to crop requirements.",
        "Avoid excessive watering.",
        "Use drip irrigation where suitable.",
        "Monitor soil moisture regularly.",
      ],
    },
    {
      id: 3,
      emoji: "🌾",
      title: "Seed Selection",
      description:
        "Selecting suitable and healthy seeds can improve crop establishment and productivity.",
      points: [
        "Use good quality seeds.",
        "Select varieties suitable for the local climate.",
        "Check seeds for visible damage or disease.",
        "Purchase seeds from reliable sources.",
      ],
    },
    {
      id: 4,
      emoji: "🐛",
      title: "Pest Management",
      description:
        "Regular monitoring can help identify pests early and reduce crop damage.",
      points: [
        "Inspect crops regularly.",
        "Identify pests before taking action.",
        "Use integrated pest management practices.",
        "Follow recommended agricultural guidance.",
      ],
    },
    {
      id: 5,
      emoji: "🌿",
      title: "Organic Farming",
      description:
        "Organic farming practices can help improve soil health and support sustainable agriculture.",
      points: [
        "Use compost and organic manure where appropriate.",
        "Maintain crop diversity.",
        "Reduce unnecessary chemical applications.",
        "Use natural pest management methods where suitable.",
      ],
    },
    {
      id: 6,
      emoji: "☀️",
      title: "Weather Awareness",
      description:
        "Understanding weather conditions can help farmers plan important agricultural activities.",
      points: [
        "Check weather forecasts regularly.",
        "Plan irrigation according to expected rainfall.",
        "Protect crops during extreme weather conditions.",
        "Avoid spraying during unsuitable weather.",
      ],
    },
  ];

  return (
    <div className="farming-tips-page">
      <header className="dashboard-header">
        <h1>🌱 AgriMitra</h1>

        <Link to="/dashboard">← Dashboard</Link>
      </header>

      <main className="farming-tips-content">
        <h2>💡 Farming Tips</h2>

        <p className="page-description">
          Explore useful agricultural practices to support better crop
          management and sustainable farming.
        </p>

        <div className="tips-grid">
          {tips.map((tip) => (
            <div className="tip-card" key={tip.id}>
              <div className="tip-emoji">{tip.emoji}</div>

              <h3>{tip.title}</h3>

              <p className="tip-description">
                {tip.description}
              </p>

              <ul>
                {tip.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default FarmingTips;