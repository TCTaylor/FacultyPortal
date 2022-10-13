import "./card.styles.css";
import { Link } from "react-router-dom";

function Card({ course }) {
  const { id, subject, number, title } = course;

  return (
    <div className="card-container">
      <h2>{subject + " " + number}</h2>
      <p>{title}</p>
      <Link to={"/course-details/" + id}>
        <button>Details</button>
      </Link>
    </div>
  );
}

export default Card;
