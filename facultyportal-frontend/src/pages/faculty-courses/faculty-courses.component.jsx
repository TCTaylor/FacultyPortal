import CourseList from "../../components/course-list/course-list.component";
import SearchBox from "../../components/search-box/search-box.component";
import { useState, useEffect } from "react";
import axios from "axios";

const API_BASE_URL = "https://localhost:7078/api";

function FacultyCourses() {
  const [searchField, setSearchField] = useState(""); // [value, setValue]
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState(courses);
  // const [error, setError] = useState(Error());

  // Will call the FacultyCourses controller
  useEffect(() => {
    //axios("https://jsonplaceholder.typicode.com/users")
    axios(API_BASE_URL + "/Courses")
      .then((response) => {
        setCourses(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Error in FacultyCourses component");
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const newFilteredCourses = courses.filter((course) => {
      return course.title.toLocaleLowerCase().includes(searchField);
    });

    setFilteredCourses(newFilteredCourses);
  }, [courses, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div>
      <h1>This is the Courses page</h1>

      <SearchBox
        className="search-box"
        type="search"
        placeholder="Search courses"
        onChangeHandler={onSearchChange}
      />

      <CourseList courses={filteredCourses} />
    </div>
  );

  // return (
  //   <div>
  //     {courses.map((course) => {
  //       return (
  //         <div key={course.id}>
  //           <h1>{course.title}</h1>
  //           <h1>{course.code}</h1>
  //         </div>
  //       );
  //     })}
  //   </div>
  //   )
}

export default FacultyCourses;
