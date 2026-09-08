import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiRequest } from "../services/api";

function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("agrimitraToken");

      if (!token) {
        setError("Please login to continue.");
        setLoading(false);
        return;
      }

      try {
        const data = await apiRequest("/auth/profile", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(data.user);
      } catch (err) {
        console.error("Profile error:", err);
        setError(err.message || "Unable to load profile.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return (
      <div className="dashboard-page">
        <main className="dashboard-content">
          <h2>Loading your dashboard... 🌱</h2>
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="dashboard-page">
        <main className="dashboard-content">
          <p className="error-message">{error}</p>
          <Link to="/login">Go to Login</Link>
        </main>
      </div>
    );
  }

  return (
    <div className="dashboard-page">
      <header className="dashboard-header">
        <h1>🌱 AgriMitra</h1>

        <Link to="/">Home</Link>
      </header>

      <main className="dashboard-content">
        <section className="welcome-section">
          <h2>Welcome, {user?.name || "Farmer"} 👋</h2>

          <p>
            Access agricultural information and useful farming services
            from one place.
          </p>

          {user?.email && (
            <p>
              Logged in as: <strong>{user.email}</strong>
            </p>
          )}
        </section>

        <section className="dashboard-services">
          <Link to="/crops" className="dashboard-card">
            <h3>🌾 Crops</h3>
            <p>Explore crop information and cultivation guidance.</p>
          </Link>

          <Link to="/diseases" className="dashboard-card">
            <h3>🦠 Crop Diseases</h3>
            <p>Learn about common crop diseases.</p>
          </Link>

          <Link to="/schemes" className="dashboard-card">
            <h3>📋 Government Schemes</h3>
            <p>Find useful agricultural government schemes.</p>
          </Link>

          <Link to="/tips" className="dashboard-card">
            <h3>💡 Farming Tips</h3>
            <p>Get useful farming tips and guidance.</p>
          </Link>

          <Link to="/profile" className="dashboard-card">
            <h3>👤 Profile</h3>
            <p>View and manage your account.</p>
          </Link>

          <Link to="/feedback" className="dashboard-card">
            <h3>💬 Feedback</h3>
            <p>Share your experience with AgriMitra.</p>
          </Link>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;