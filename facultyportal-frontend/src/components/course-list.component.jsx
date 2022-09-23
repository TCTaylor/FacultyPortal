import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import axios from "axios";

let baseURL = 'http://localhost:3000/api/'

function CourseList() {

  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setContacts(response.data);
        setError(null);
      })
      .catch(setError);
  }, []);

  if (error) return <p>An error occurred</p>

  return (
    <div>
      {contacts.map((contact) => {
        return(
          <div key={contact.id}>
            <h3>{contact.name}</h3>
            <h3>{contact.email}</h3>
          </div>
        );
      })}
    </div>
  );

  // let [courses] = useState('');

  // const fetchData = useCallback(() => {
  //   // axios.get(baseURL + '/FacultyCoursesController')
  //   axios.get('https://jsonplaceholder.typicode.com/users')
  //   .then((response) => {
  //     courses(response.data)
  //   })
  //   .catch((error) => {
  //     console.log(error)
  //   })
  // }, [])
  
  // useEffect(() => {
  //   fetchData()
  // }, [fetchData])

  // return (
  //   <div key={courses.id}>
  //     <h1>{courses.name}</h1>
  //     <h1>Hello, this should be a list of courses</h1>
  //   </div> 
  // )
}

export default CourseList;