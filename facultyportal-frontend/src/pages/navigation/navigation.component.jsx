import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as FPLogo } from "../../assets/apple-black-shape-svgrepo-com.svg";

function Navigation() {
  const handleSignOut = () => {
    localStorage.removeItem("token");
    console.log("signed out! Token is now " + localStorage.getItem("token"))
  };
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <FPLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/faculty-courses">
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
