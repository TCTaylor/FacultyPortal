import "./card.styles.css";
import CourseDetails from "../../pages/course-details/course-details.component";
import { Link } from "react-router-dom";
import { useState } from "react";

function Card({ course }) {
  const { subject, number, title } = course;

  return (
    <div className="card-container">
      <h2>{subject + " " + number}</h2>
      <p>{title}</p>

      <Link
        to={{
          pathname: "/course-details",
          state: { course },
        }}
      >
        <button>Details</button>
      </Link>
    </div>
  );
}

export default Card;
