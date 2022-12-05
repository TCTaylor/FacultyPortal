import "./card.styles.css";
import { Link } from "react-router-dom";

function Card({ course }) {
  const { courseId, courseSubject, courseNumber, courseTitle } = course;

  return (
    <div className="card-container">
      <div className="card-menu">
        <h4>
          <i className="bi bi-three-dots-vertical" onClick={() => {}}></i>
        </h4>
      </div>
      <div>
        <h2>{courseSubject + " " + courseNumber}</h2>
        <p>{courseTitle}</p>
        <Link to={"/courses/" + courseId}>
          <button className="btn btn-sm btn-light">Details</button>
        </Link>
      </div>
    </div>
  );
}

export default Card;
