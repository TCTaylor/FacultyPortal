import "./card.styles.css";
import CourseDetails from "../../pages/course-details/course-details.component";
import { Link } from "react-router-dom";
import { useState } from "react";

function Card({ course }) {
  const { id, subject, courseNumber, title } = course;

  return (
    <div className="card-container">
      <h2>{subject + " " + courseNumber}</h2>
      <p>{title}</p>
      <Link to={"/course-details/" + id}>
        <button>Details</button>
      </Link>
    </div>
  );
}

export default Card;
