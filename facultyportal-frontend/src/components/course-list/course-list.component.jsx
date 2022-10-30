import React from "react";
import Card from "../card/card-component";

import "./course-list.styles.css";

function CourseList({ courses }) {

  return (
    <div className="card-list">
      {courses.map((course) => {
        return (
          <div key={course.courseId}>
            <Card course={course} />
          </div>
        );
      })}
    </div>
  );
}

export default CourseList;
