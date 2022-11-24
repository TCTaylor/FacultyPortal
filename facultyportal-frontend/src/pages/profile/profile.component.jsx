import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/use-auth";
import axios from "axios";

import ProfileImage from "../../components/profile-image/profile-image.component";

import "./profile.styles.css";
const API_BASE_URL = "https://localhost:7078/api";

function Profile() {
  const [faculty, setFaculty] = useState({});
  const [error, setError] = useState(null);

  const { displayName, facultyId } = useAuth();

  useEffect(() => {
    axios
      .get(API_BASE_URL + "/Faculty/" + facultyId)
      .then((response) => {
        setFaculty(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <div className="profile container mt-4">
      <div className="row justify-content-center">
        <div className="col-sm-3">
          <ProfileImage />
          <h2>{faculty.firstName} {faculty.lastName}</h2>
        </div>
        <div className="col-sm-4 mt-4">
          <h2 className="mb-3">Profile</h2>
          <ul className="list-group">
            <Link>
              <li className="list-group-item">
                <i className="bi bi-envelope"> </i>
                Contact
              </li>
            </Link>
            <Link>
              <li className="list-group-item">
                <i className="bi bi-person-lines-fill"> </i>
                Biography
              </li>
            </Link>
            <Link>
              <li className="list-group-item">
                <i className="bi bi-link"> </i>
                Links
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Profile;
