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
      <div className="navigation-container">
        <div className="navigation">
          <Link to="/">
            <div className="logo-container">
              <FPLogo className="logo" />
            </div>
          </Link>
          <Link to={"/courses"}>
            <div className="nav-link-container">
              <div className="nav-link">Courses</div>
            </div>
          </Link>
          {(isAdmin || isEditor) && (
            <Link to={"/"}>
              <div className="nav-link-container">
                <div className="nav-link">Users</div>
              </div>
            </Link>
          )}
          <div className="account-dropdown">
            <div className="display-name">{displayName}</div>
            <div className="dropdown-content">
              <Link to="/">
                <p>Profile</p>
              </Link>
              <Link onClick={handleSignOut}>
                <p>Sign Out</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
