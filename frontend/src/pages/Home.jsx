import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <Navbar />

      <main className="home">
        <section className="hero-section">
          <h1>Smart Farming, Better Future 🌱</h1>

          <p>
            AgriMitra helps farmers access agricultural information,
            government schemes, crop guidance and farming resources
            in one place.
          </p>

          <Link to="/register" className="get-started-btn">
                Get Started
        </Link>
        </section>

        <section className="services">
          <h2>Our Services</h2>

          <div className="service-container">
            <div className="service-card">
              <h3>🌾 Crop Information</h3>
              <p>Learn about crops and their cultivation requirements.</p>
            </div>

            <div className="service-card">
              <h3>🦠 Crop Diseases</h3>
              <p>Explore common crop diseases and their information.</p>
            </div>

            <div className="service-card">
              <h3>📋 Government Schemes</h3>
              <p>Find useful agricultural government schemes.</p>
            </div>

            <div className="service-card">
              <h3>💡 Farming Tips</h3>
              <p>Get useful farming tips and agricultural guidance.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;