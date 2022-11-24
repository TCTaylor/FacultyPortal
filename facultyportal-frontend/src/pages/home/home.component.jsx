import { Link } from "react-router-dom";
import useAuth from "../../hooks/use-auth";

import "./home.styles.css";

const Home = () => {
  const { displayName, isAdmin, isEditor, isReadOnly } = useAuth();

  return (
    <div className="home container mt-4">
      <h1 className="mb-4">Welcome, {displayName}</h1>
      <div className="home-card-list">
        {isReadOnly && (
          <>
            <Link to={"/courses"}>
              <div className="home-card-container">
                <i className="bi bi-journals"></i>
                <h2>Courses</h2>
              </div>
            </Link>
            <Link to={""}>
              <div className="home-card-container">
                <i className="bi bi-list-task"></i>
                <h2>Tasks</h2>
              </div>
            </Link>
            <Link to={""}>
              <div className="home-card-container">
                <i className="bi bi-calendar4-week"></i>
                <h2>Calendar</h2>
              </div>
            </Link>
            <Link to={""}>
              <div className="home-card-container">
                <i className="bi bi-file-earmark-text"></i>
                <h2>Files</h2>
              </div>
            </Link>
          </>
        )}
        {(isAdmin || isEditor) && (
          <Link to={"/faculty-maint"}>
            <div className="home-card-container">
              <i className="bi bi-people-fill"></i>
              <h2>Faculty</h2>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Home;
