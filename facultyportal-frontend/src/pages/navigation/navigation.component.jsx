import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as FPLogo } from "../../assets/books-stack-of-three-svgrepo-com.svg";
import { useNavigate } from "react-router-dom";
import { signOut } from "../../services/auth-service";
import { useEffect, useState } from "react";

import useAuth from "../../hooks/use-auth";
import axios from "axios";

import DfltProfileImg from "../../assets/user-profile-icon-free-vector.webp";
import "./navigation.styles.css";

const API_BASE_URL = "https://localhost:7078/api";

function Navigation() {
  const [signingOut, setSigningOut] = useState(false);
  // const [profileImgData, setProfileImgData] = useState([]);
  // const [profileImg, setProfileImg] = useState(null);

  const { accessorId, displayName, isAdmin, isEditor, isReadOnly } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    setSigningOut(true);
  };

  useEffect(() => {
    if (signingOut) {
      signOut();
      navigate("/sign-in");
    }
  }, [signingOut]);

  // useEffect(() => {
  //   axios
  //     .get(API_BASE_URL + "/ProfileImages/" + accessorId)
  //     .then((response) => {
  //       setProfileImgData(response.data);
  //       setProfileImg(URL.createObjectURL(profileImgData[0].imagePath));
  //     })
  //     .catch((error) => {
  //     });
  // }, []);

  return (
    <Fragment>
      <div className="navbar navbar-expand-lg bg-light">
        <div className="navigation container-fluid">
          <Link to="/">
            <div className="navbar-brand">
              <FPLogo className="logo" />
            </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {isReadOnly && (
                <>
                  <li className="nav-item" style={{ fontWeight: 750 }}>
                    <Link className="nav-link" to={"/courses"}>
                      <i className="bi bi-journals"> </i>
                      Courses
                    </Link>
                  </li>
                  <li className="nav-item" style={{ fontWeight: 750 }}>
                    <Link className="nav-link">
                      <i className="bi bi-list-task"> </i>
                      Tasks
                    </Link>
                  </li>
                  <li className="nav-item" style={{ fontWeight: 750 }}>
                    <Link className="nav-link">
                      <i className="bi bi-calendar4-week"> </i>
                      Calendar
                    </Link>
                  </li>
                  <li className="nav-item" style={{ fontWeight: 750 }}>
                    <Link className="nav-link">
                      <i className="bi bi-file-earmark-text"> </i>
                      Files
                    </Link>
                  </li>
                </>
              )}
              {(isAdmin || isEditor) && (
                <li className="nav-item" style={{ fontWeight: 750 }}>
                  <Link className="nav-link" to={"/faculty-maint"}>
                    <i className="bi bi-people-fill"> </i>
                    Faculty
                  </Link>
                </li>
              )}
            </ul>
            <div className="auth-dropdown d-flex">
              <ul className="navbar-nav">
                <li className="nav-item dropdown" style={{ fontWeight: 750 }}>
                  <Link
                    className="nav-link dropdown-toggle"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      className="rounded-circle shadow-4"
                      // src={profileImg ? profileImg : DfltProfileImg}
                      src={DfltProfileImg}
                      alt="Profile picture"
                      width="60"
                      height="60"
                    />
                    {" " + displayName}
                  </Link>
                  <ul
                    className="dropdown-menu"
                    style={{ margin: 0 }} // Fix Popper warning
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    {isReadOnly && (
                      <li>
                        <Link className="dropdown-item" to="/profile">
                          <i className="bi bi-person-circle"> </i>
                          Profile
                        </Link>
                      </li>
                    )}
                    <li>
                      <Link className="dropdown-item" onClick={handleSignOut}>
                        <i className="bi bi-box-arrow-right"> </i>
                        Sign Out
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
