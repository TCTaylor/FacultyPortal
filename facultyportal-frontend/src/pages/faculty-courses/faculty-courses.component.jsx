import CourseList from "../../components/course-list/course-list.component";
import SearchBox from "../../components/search-box/search-box.component";
import { useState, useEffect } from "react";
import axios from "axios";

const API_BASE_URL = "https://localhost:7078/api";

function FacultyCourses() {
  const [isLoading, setIsLoading] = useState(true);
  const [facultyCourses, setFacultyCourses] = useState([]);
  const [searchField, setSearchField] = useState(""); // [value, setValue]
  const [filteredCourses, setFilteredCourses] = useState(facultyCourses);
  const [error, setError] = useState(false);

  const instId = JSON.parse(localStorage.getItem("token"))["instId"];

  // Will call the FacultyCourses controller
  useEffect(() => {
    axios
      //.get("https://jsonplaceholder.typicode.com/users")
      .get(API_BASE_URL + "/FacultyCourses/" + instId)
      .then((response) => {
        setFacultyCourses(response.data);
        setIsLoading(false);
        // console.log(response.data);
      })
      .catch((error) => {
        setError(true);
        setIsLoading(false);
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const newFilteredCourses = facultyCourses.filter((facultyCourse) => {
      return facultyCourse.courseTitle.toLocaleLowerCase().includes(searchField);
    });

    setFilteredCourses(newFilteredCourses);
  }, [facultyCourses, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error occurred.</p>;
  }

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
