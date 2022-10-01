import React from "react";
import Card from "../card/card-component";
import "./course-list.styles.css";
import { useState, useEffect } from "react";
import axios from "axios";

// const baseURL = 'http://localhost:3000/api'

function CourseList({ courses }) {

  return (
    <div className="card-list">
      {courses.map((course) => {
        return (
          <div key={course.id}>
            <Card course={course} />
          </div>
        );
      })};
    </div>
  );

  // const [courses, setCourses] = useState([]);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   axios("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => {
  //       setCourses(response.data);
  //       setError(null);
  //     })
  //     .catch(setError);
  // }, []);
  // if (error) return <p>An error occurred</p>

  // return (
  //   <div>
  //     {courses.map((course) => {
  //       return(
  //         <div key={course.id}>
  //           <h3>{course.name}</h3>
  //           <h3>{course.email}</h3>
  //         </div>
  //       );
  //     })}
  //   </div>
  // );
}

export default CourseList;
