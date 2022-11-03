import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as FPLogo } from "../../assets/books-stack-of-three-svgrepo-com.svg";
import { useNavigate } from "react-router-dom";
import { signOut } from "../../services/auth-service";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/use-auth";

import "./navigation.styles.css";

function Navigation() {
  const [signingOut, setSigningOut] = useState(false);
  const { displayName, isAdmin, isEditor } = useAuth();
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

  return (
    <Fragment>
      <div className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/">
            <div className="navbar-brand">
              <FPLogo className="logo" />
            </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to={"/courses"}>
                <i className="bi bi-journals"> </i>
                  Courses
                </Link>
              </li>
              {(isAdmin || isEditor) && (
                <li className="nav-item">
                  <Link className="nav-link" to={"/"}>
                    <i className="bi bi-people-fill"></i>
                    Users
                  </Link>
                </li>
              )}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {/* <img src="" alt="User profile picture" width="10" height="10"></img> */}
                  <i className="bi bi-person-circle"> </i>
                  {displayName}
                </Link>
                <ul
                  className="dropdown-menu"
                  style={{ margin: 0 }} // Fix Popper warning
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link className="dropdown-item" to="/profile">
                      <i className="bi bi-person-circle"> </i>
                      Profile
                    </Link>
                  </li>
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
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
