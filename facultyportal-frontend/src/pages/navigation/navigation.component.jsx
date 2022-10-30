import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as FPLogo } from "../../assets/apple-black-shape-svgrepo-com.svg";
import { useNavigate } from "react-router-dom";
import { signOut } from "../../services/auth-service";
import { useEffect, useState } from "react";

import "./navigation.styles.css";

function Navigation() {
  const [signedIn, setSignedIn] = useState(true);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut();
    setSignedIn(false);
  };

  useEffect(() => {
    if (!signedIn) {
      navigate("/sign-in");
    }
  }, [signedIn]);

  return (
    <Fragment>
      <div className="navigation">

        <div className="logo-container">
          <Link to="/">
            <FPLogo className="logo" />
          </Link>
        </div>

        <div className="nav-link">
          <Link to={"/faculty-courses"}>
            Courses
          </Link>
        </div>

        <div className="button-sign-out">
          <button onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
