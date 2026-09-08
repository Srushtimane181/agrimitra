import { Link, useParams } from "react-router-dom";

function SchemeDetails() {
  const { id } = useParams();

  const schemeData = {
    "pm-kisan": {
      name: "PM-KISAN",
      emoji: "💰",
      category: "Financial Support",
      description:
        "PM-KISAN is a Government of India scheme intended to provide financial support to eligible farmer families.",
      benefits: [
        "Provides financial assistance to eligible farmer families.",
        "Supports farmers in meeting agricultural and household needs.",
        "Payments are transferred through the designated government process.",
      ],
      eligibility:
        "Eligibility depends on the applicable government rules and exclusions.",
    },

    "pm-fasal-bima": {
      name: "PM Fasal Bima Yojana",
      emoji: "🛡️",
      category: "Crop Insurance",
      description:
        "PM Fasal Bima Yojana provides crop insurance coverage against specified risks and crop losses.",
      benefits: [
        "Provides insurance protection for eligible crops.",
        "Helps reduce financial risk from specified crop losses.",
        "Supports farmers after eligible crop-loss events.",
      ],
      eligibility:
        "Eligibility and notified crops depend on the applicable season and government notifications.",
    },

    "kisan-credit-card": {
      name: "Kisan Credit Card",
      emoji: "💳",
      category: "Agricultural Credit",
      description:
        "The Kisan Credit Card system helps eligible farmers access agricultural credit through participating financial institutions.",
      benefits: [
        "Supports short-term agricultural credit requirements.",
        "Can help farmers meet cultivation-related expenses.",
        "Credit terms depend on the lending institution and applicable rules.",
      ],
      eligibility:
        "Eligibility is determined by the participating financial institution according to applicable guidelines.",
    },

    "soil-health-card": {
      name: "Soil Health Card",
      emoji: "🌱",
      category: "Soil Management",
      description:
        "The Soil Health Card provides farmers with information about soil conditions and nutrient recommendations.",
      benefits: [
        "Provides information about soil nutrient status.",
        "Helps farmers understand recommended soil management.",
        "Can support more efficient fertilizer application.",
      ],
      eligibility:
        "Availability and testing procedures depend on the applicable government program and local implementation.",
    },
  };

  const scheme = schemeData[id];

  if (!scheme) {
    return (
      <div className="not-found">
        <h2>Scheme not found</h2>
        <Link to="/schemes">← Back to Schemes</Link>
      </div>
    );
  }

  return (
    <div className="scheme-details-page">
      <header className="dashboard-header">
        <h1>🌱 AgriMitra</h1>

        <Link to="/schemes">← Back to Schemes</Link>
      </header>

      <main className="scheme-details-content">
        <div className="scheme-details-card">
          <div className="large-scheme-emoji">{scheme.emoji}</div>

          <h2>{scheme.name}</h2>

          <p className="scheme-details-category">
            {scheme.category}
          </p>

          <p className="scheme-details-description">
            {scheme.description}
          </p>

          <section>
            <h3>🎁 Key Benefits</h3>

            <ul>
              {scheme.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </section>

          <section>
            <h3>👨‍🌾 Eligibility</h3>

            <p>{scheme.eligibility}</p>
          </section>

          <div className="scheme-note">
            <strong>Important:</strong> Scheme eligibility, benefits,
            application procedures and rules can change. Users should
            verify the latest information through official government
            sources before applying.
          </div>
        </div>
      </main>
    </div>
  );
}

export default SchemeDetails;