import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import axios from "axios";

let baseURL = 'http://localhost:3000/api'

function CourseList() {

  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(baseURL + '/Courses')
      .then((response) => {
        setCourses(response.data);
        setError(null);
      })
      .catch(setError);
  }, []);

  if (error) return <p>An error occurred</p>

  return (
    <div>
      {courses.map((course) => {
        return(
          <div key={course.Id}>
            <h3>{course.Title}</h3>
            <h3>{course.Code}</h3>
          </div>
        );
      })}
    </div>
  );

  // const [contacts, setContacts] = useState([]);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   axios("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => {
  //       setContacts(response.data);
  //       setError(null);
  //     })
  //     .catch(setError);
  // }, []);

  // if (error) return <p>An error occurred</p>

  // return (
  //   <div>
  //     {contacts.map((contact) => {
  //       return(
  //         <div key={contact.id}>
  //           <h3>{contact.name}</h3>
  //           <h3>{contact.email}</h3>
  //         </div>
  //       );
  //     })}
  //   </div>
  // );
}

export default CourseList;