import CourseMaintList from "../../../components/admin/course-list/course-list.component";
import SearchBox from "../../../components/search-box/search-box.component";
import Loading from "../../../components/loading/loading.component";
import Error from "../../../components/error/error.component";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

const API_BASE_URL = "https://localhost:7078/api";

function CourseMaintenance() {
  const [loading, setLoading] = useState(true);
  const [facultyCourses, setFacultyCourses] = useState([]);
  const [searchField, setSearchField] = useState(""); // [value, setValue]
  const [filteredCourses, setFilteredCourses] = useState(facultyCourses);
  const [error, setError] = useState(null);

  const { instId } = useParams();

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
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const newFilteredCourses = facultyCourses.filter((facultyCourse) => {
      return facultyCourse.courseTitle
        .toLocaleLowerCase()
        .includes(searchField);
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
    <div>
      <h1>This is the Courses page</h1>

      <SearchBox
        className="search-box"
        type="search"
        placeholder="Search courses"
        onChangeHandler={onSearchChange}
      />

      <CourseMaintList courses={filteredCourses} />
    </div>
  );
}

export default CourseMaintenance;
