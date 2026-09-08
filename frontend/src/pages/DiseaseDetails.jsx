import { Link, useParams } from "react-router-dom";

function DiseaseDetails() {
  const { id } = useParams();

  const diseaseData = {
    "rice-blast": {
      name: "Rice Blast",
      emoji: "🌾",
      crop: "Rice",
      symptoms: [
        "Spindle-shaped spots may appear on leaves.",
        "Brown or gray lesions can develop on plant parts.",
        "Severe infection may affect crop growth and yield.",
      ],
      causes:
        "Rice blast is commonly associated with fungal infection and favorable humid conditions.",
      prevention: [
        "Use healthy and suitable seeds.",
        "Maintain balanced fertilizer application.",
        "Avoid excessive nitrogen application.",
        "Maintain proper field and water management.",
      ],
    },

    "wheat-rust": {
      name: "Wheat Rust",
      emoji: "🌾",
      crop: "Wheat",
      symptoms: [
        "Orange, yellow or brown rust-like spots may appear.",
        "Leaves may develop small pustules.",
        "Severe infection can reduce plant growth.",
      ],
      causes:
        "Wheat rust is caused by fungal pathogens and can spread under suitable environmental conditions.",
      prevention: [
        "Use disease-resistant varieties where available.",
        "Use healthy seeds.",
        "Monitor the crop regularly.",
        "Remove heavily affected plant material where appropriate.",
      ],
    },

    "maize-leaf-blight": {
      name: "Maize Leaf Blight",
      emoji: "🌽",
      crop: "Maize",
      symptoms: [
        "Long gray or brown lesions may appear on leaves.",
        "Affected leaves may gradually dry.",
        "Severe infection can reduce photosynthesis and yield.",
      ],
      causes:
        "Maize leaf blight is generally associated with fungal pathogens and favorable warm, humid conditions.",
      prevention: [
        "Use healthy seeds.",
        "Maintain proper plant spacing.",
        "Remove crop residues where appropriate.",
        "Monitor plants regularly for symptoms.",
      ],
    },

    "tomato-blight": {
      name: "Tomato Blight",
      emoji: "🍅",
      crop: "Tomato",
      symptoms: [
        "Dark spots may appear on leaves.",
        "Leaves can turn yellow and dry.",
        "Fruit may develop dark or damaged areas.",
      ],
      causes:
        "Tomato blight can be caused by fungal or fungus-like pathogens and may spread rapidly under favorable conditions.",
      prevention: [
        "Avoid excessive moisture on leaves.",
        "Provide adequate spacing between plants.",
        "Remove affected plant material carefully.",
        "Use healthy seedlings and monitor the crop regularly.",
      ],
    },
  };

  const disease = diseaseData[id];

  if (!disease) {
    return (
      <div className="not-found">
        <h2>Disease not found</h2>
        <Link to="/diseases">← Back to Diseases</Link>
      </div>
    );
  }

  return (
    <div className="disease-details-page">
      <header className="dashboard-header">
        <h1>🌱 AgriMitra</h1>

        <Link to="/diseases">← Back to Diseases</Link>
      </header>

      <main className="disease-details-content">
        <div className="disease-details-card">

          <div className="large-disease-emoji">
            {disease.emoji}
          </div>

          <h2>{disease.name}</h2>

          <p className="disease-crop">
            Affects: <strong>{disease.crop}</strong>
          </p>

          <section>
            <h3>🔍 Symptoms</h3>

            <ul>
              {disease.symptoms.map((symptom, index) => (
                <li key={index}>{symptom}</li>
              ))}
            </ul>
          </section>

          <section>
            <h3>🦠 Causes</h3>

            <p>{disease.causes}</p>
          </section>

          <section>
            <h3>🛡️ Prevention & Management</h3>

            <ul>
              {disease.prevention.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <div className="disease-note">
            <strong>Note:</strong> This information is for general
            educational guidance. For serious crop problems, farmers
            should consult a qualified agricultural expert.
          </div>

        </div>
      </main>
    </div>
  );
}

export default DiseaseDetails;