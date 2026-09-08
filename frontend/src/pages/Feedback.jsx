import { useState } from "react";
import { Link } from "react-router-dom";

function Feedback() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.rating ||
      !formData.message
    ) {
      alert("Please fill in all fields.");
      return;
    }

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      rating: "",
      message: "",
    });
  };

  return (
    <div className="feedback-page">

      <header className="dashboard-header">
        <h1>🌱 AgriMitra</h1>

        <Link to="/dashboard">← Dashboard</Link>
      </header>

      <main className="feedback-content">

        <h2>💬 Feedback</h2>

        <p className="page-description">
          Your feedback helps us improve AgriMitra.
        </p>

        <div className="feedback-card">

          {submitted && (
            <div className="success-message">
              ✅ Thank you for your feedback!
            </div>
          )}

          <form onSubmit={handleSubmit}>

            <label>
              Name

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />
            </label>

            <label>
              Email

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </label>

            <label>
              Rating
            </label>

            <div className="rating-container">

              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  className={
                    formData.rating >= star
                      ? "star active"
                      : "star"
                  }
                  onClick={() =>
                    setFormData({
                      ...formData,
                      rating: star,
                    })
                  }
                >
                  ★
                </button>
              ))}

            </div>

            <label>
              Your Feedback

              <textarea
                name="message"
                placeholder="Write your feedback here..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
              />
            </label>

            <button
              type="submit"
              className="submit-feedback-button"
            >
              Submit Feedback
            </button>

          </form>

        </div>

      </main>

    </div>
  );
}

export default Feedback;