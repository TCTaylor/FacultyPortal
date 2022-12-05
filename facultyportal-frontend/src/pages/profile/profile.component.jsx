import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/use-auth";
import { API_BASE_URL } from "../../api/api";
import axios from "axios";

import ProfileImage from "../../components/profile-image/profile-image.component";
import Error from "../../components/error/error.component";

import "./profile.styles.css";

function Profile() {
  const [faculty, setFaculty] = useState({});
  const [error, setError] = useState(null);

  const { facultyId } = useAuth();

  useEffect(() => {
    axios
      .get(API_BASE_URL + "/Faculty/" + facultyId)
      .then((response) => {
        setFaculty(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, [facultyId]);

  if (error) {
    return <Error error={error.response.status} />;
  }

  return (
    <div className="profile container mt-4">
      <h1 className="mb-3">Profile</h1>
      <div className="row justify-content-center">
        <ProfileImage />
        <h3>
          {faculty.firstName} {faculty.lastName}
        </h3>
        <div className="mt-4">
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
