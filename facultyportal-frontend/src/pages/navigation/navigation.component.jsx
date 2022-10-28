import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as FPLogo } from "../../assets/apple-black-shape-svgrepo-com.svg";
import { useNavigate } from "react-router-dom";
import { signOut } from "../../services/auth-service";
import { useEffect, useState } from "react";

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
        <Link className="logo-container" to="/">
          <FPLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to={"/faculty-courses"}>
            Courses
          </Link>
          <button className="sign-out" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
