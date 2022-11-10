import Loading from "../../components/loading/loading.component";

import { useState, useEffect } from "react";
import useAuth from "../../hooks/use-auth";

import axios from "axios";

import "./profile.styles.css";

const API_BASE_URL = "https://localhost:7078/api";

function Profile() {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState([]);
  const [error, setError] = useState(false);
  const photoPath = "";
  const photoFileName = "";

  const { instId } = useAuth();

  const handleImageUpload = (e) => {
    e.preventDefault();
  };

  // Will call the Faculty controller
  useEffect(() => {
    axios
      .get(API_BASE_URL + "/Faculty")
      .then((response) => {
        setProfile(response.data);
        setLoading(false);
        // console.log(response.data);
      })
      .catch((error) => {
        setError(true);
        setLoading(false);
        console.log(error);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>An error occurred.</p>;
  }

  return (
    <div className="container mt-4">
      <div className="profile-wrapper">
        <div className="profile-img">
          <img
            className="rounded-circle"
            width="250px"
            height="250px"
            alt="Profile picture"
            // src={photoPath + photoFileName}
            src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
          />
          <button className="btn-edit">
            <i className="bi bi-pencil-square"></i>
          </button>
          <input
            className="m-2"
            type="file"
            hidden
            onChange={handleImageUpload}
          />
        </div>
        <div key={profile[0].id}>
          <h2>
            {/* {profile[0].firstName} {profile[0].lastName} */}
            Name
          </h2>
          <h3>Title</h3>
          <h3>Profile</h3>
          <ul>
            <li>Tasks</li>
            <li>Calendar</li>
            <li>Files</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Profile;
