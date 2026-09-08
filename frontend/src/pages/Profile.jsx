import { useState } from "react";
import { Link } from "react-router-dom";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "Farmer",
    mobile: "9876543210",
    location: "Maharashtra",
    language: "English",
  });

  const [formData, setFormData] = useState(profile);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEdit = () => {
    setFormData(profile);
    setIsEditing(true);
  };

  const handleSave = () => {
    setProfile(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData(profile);
    setIsEditing(false);
  };

  return (
    <div className="profile-page">

      <header className="dashboard-header">
        <h1>🌱 AgriMitra</h1>

        <Link to="/dashboard">← Dashboard</Link>
      </header>

      <main className="profile-content">

        <h2>👤 My Profile</h2>

        <p className="page-description">
          Manage your basic farmer information and preferences.
        </p>

        <div className="profile-card">

          <div className="profile-avatar">
            👤
          </div>

          {!isEditing ? (
            <>
              <div className="profile-info">

                <div className="profile-item">
                  <span>👤 Name</span>
                  <strong>{profile.name}</strong>
                </div>

                <div className="profile-item">
                  <span>📱 Mobile Number</span>
                  <strong>{profile.mobile}</strong>
                </div>

                <div className="profile-item">
                  <span>📍 Location</span>
                  <strong>{profile.location}</strong>
                </div>

                <div className="profile-item">
                  <span>🌐 Preferred Language</span>
                  <strong>{profile.language}</strong>
                </div>

              </div>

              <button
                className="edit-profile-button"
                onClick={handleEdit}
              >
                ✏️ Edit Profile
              </button>
            </>
          ) : (
            <div className="profile-form">

              <label>
                Name
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </label>

              <label>
                Mobile Number
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                />
              </label>

              <label>
                Location
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                />
              </label>

              <label>
                Preferred Language

                <select
                  name="language"
                  value={formData.language}
                  onChange={handleChange}
                >
                  <option value="English">English</option>
                  <option value="Marathi">Marathi</option>
                  <option value="Hindi">Hindi</option>
                </select>

              </label>

              <div className="profile-actions">

                <button
                  className="save-profile-button"
                  onClick={handleSave}
                >
                  💾 Save Changes
                </button>

                <button
                  className="cancel-profile-button"
                  onClick={handleCancel}
                >
                  ❌ Cancel
                </button>

              </div>

            </div>
          )}

        </div>

      </main>

    </div>
  );
}

export default Profile;