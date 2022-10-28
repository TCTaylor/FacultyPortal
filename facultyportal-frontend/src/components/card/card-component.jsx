import "./card.styles.css";
import { Link } from "react-router-dom";

function Card({ course }) {
  const { courseId, courseSubject, courseNumber, courseTitle } = course;

  return (
    <div className="card-container">
      <h2>{courseSubject + " " + courseNumber}</h2>
      <p>{courseTitle}</p>
      <Link to={"/course-details/" + courseId}>
        <button>Details</button>
      </Link>
    </div>
  );
}

export default Card;
