import CourseList from "../../components/course-list/course-list.component";
import SearchBox from "../../components/search-box/search-box.component";
import { useState, useEffect } from "react";
import axios from "axios";

const apiURL = "https://localhost:7078/api";

function FacultyCourses() {
  const [searchField, setSearchField] = useState(""); // [value, setValue]
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [error, setError] = useState(null);

  // Be sure to not make an early return before all useEffect Hooks have been called.
  useEffect(() => {
    //axios("https://jsonplaceholder.typicode.com/users")
    axios(apiURL + "/Courses")
      .then((response) => {
        setCourses(response.data);
        console.log(response.data)
        // if (!response.data || response.data.length == 0) {
        //   setError(null);
        // }
        // else {
        // setCourses(response.data);
        // console.log(response)
        // }
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response.data);
      });
  }, []);

  return (
    <div>
      {courses.map((course) => {
        return (
          <div key={course.id}>
            <h1>{course.title}</h1>
            <h1>{course.code}</h1>
          </div>
        );
      })};
    </div>
    )

  // useEffect(() => {
  //   const newFilteredCourses = courses.filter((course) => {
  //     return course.name.toLocaleLowerCase().includes(searchField);
  //   });

  //   setFilteredCourses(newFilteredCourses);
  // }, [courses, searchField]);

  // // Place this error handler after all Hooks in case of an early return due to error.
  // if (error) return <p>An error occurred</p>;

  // const onSearchChange = (event) => {
  //   const searchFieldString = event.target.value.toLocaleLowerCase();
  //   setSearchField(searchFieldString);

  //   console.log(onSearchChange);
  //   console.log(searchFieldString);
  // };

  // return (
  //   <div>
  //     <h1>This is the Courses page</h1>

  //     <SearchBox
  //       className="search-box"
  //       type="search"
  //       placeholder="Search courses"
  //       onChangeHandler={onSearchChange}
  //     />

  //     <CourseList courses={filteredCourses} />
  //   </div>
  // );
}

export default FacultyCourses;
