import "./card.styles.css";
import { Link } from "react-router-dom";

function Card({ course }) {
  const { id, name, email } = course;

  return (
    <div className="card-container">
      {/* <img
        alt={`course ${name}`}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      /> */}
      <h2>{name}</h2>
      <p>{email}</p>
      <Link className="nav-link" to="/course-details">
        Details
      </Link>
    </div>
  );
}

export default Card;
