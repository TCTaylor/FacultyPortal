import ProfileImage from "../../components/profile-image/profile-image.component";

import useAuth from "../../hooks/use-auth";
import { Link } from "react-router-dom";

import "./profile.styles.css";

function Profile() {
  const { displayName } = useAuth();

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-3">
          <ProfileImage />
          <h2>{displayName}</h2>
          <h3>Title</h3>
          
        </div>
        <div className="col-4 mt-4">
          <h3 className="mb-3">Profile</h3>
          <ul className="list-group">
            <Link style={{ textDecoration: "none" }}>
              <li className="list-group-item">
                <i className="bi bi-list-task"> </i>
                Tasks
              </li>
            </Link>
            <Link style={{ textDecoration: "none" }}>
              <li className="list-group-item">
                <i className="bi bi-calendar4-week"> </i>
                Calendar
              </li>
            </Link>
            <Link style={{ textDecoration: "none" }}>
              <li className="list-group-item">
                <i className="bi bi-file-earmark-text"> </i>
                Files
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Profile;
