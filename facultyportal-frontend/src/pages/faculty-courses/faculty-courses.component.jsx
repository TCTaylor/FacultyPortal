import CourseList from "../../components/course-list/course-list.component";
import SearchBox from "../../components/search-box/search-box.component";
import Loading from "../../components/loading/loading.component";
import Error from "../../components/error/error.component";

import { useState, useEffect } from "react";
import useAuth from "../../hooks/use-auth";

import axios from "axios";

const API_BASE_URL = "https://localhost:7078/api";

function FacultyCourses() {
  const [loading, setLoading] = useState(true);
  const [facultyCourses, setFacultyCourses] = useState([]);
  const [searchField, setSearchField] = useState(""); // [value, setValue]
  const [filteredCourses, setFilteredCourses] = useState(facultyCourses);
  const [error, setError] = useState(null);

  const { instId } = useAuth();

  // Will call the FacultyCourses controller
  useEffect(() => {
    axios
      //.get("https://jsonplaceholder.typicode.com/users")
      .get(API_BASE_URL + "/FacultyCourses/" + instId)
      .then((response) => {
        setFacultyCourses(response.data);
        setLoading(false);
        // console.log(response.data);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
        console.log(error.response.status);
      });
  }, []);

  useEffect(() => {
    const newFilteredCourses = facultyCourses.filter((facultyCourse) => {
      if (isNaN(+searchField)) {
        return facultyCourse.courseTitle
          .toLocaleLowerCase()
          .includes(searchField);
      } else {
        return facultyCourse.courseNumber.includes(searchField);
      }
    });

    setFilteredCourses(newFilteredCourses);
  }, [facultyCourses, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error.response.status} />;
  }

  return (
    <div className="container mt-4">
      <h1>Courses</h1>
      <SearchBox
        className="search-box"
        type="search"
        placeholder="Search courses"
        onChangeHandler={onSearchChange}
      />
      <CourseList courses={filteredCourses} />
    </div>
  );
}

export default FacultyCourses;
