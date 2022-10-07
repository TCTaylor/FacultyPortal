import "./course-list.styles.css";
import React from "react";
import Card from "../card/card-component";

function CourseList({ courses }) {

  return (
    <div className="card-list">
      {courses.map((course) => {
        return (
          <div key={course.id}>
            <Card course={course} />
          </div>
        );
      })}
    </div>
  );
}

export default CourseList;
