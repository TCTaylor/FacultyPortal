import CourseMaintList from "../../../components/admin/course-list/course-list.component";
import SearchBox from "../../../components/search-box/search-box.component";
import Loading from "../../../components/loading/loading.component";
import Error from "../../../components/error/error.component";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

const API_BASE_URL = "https://localhost:7078/api";

function CourseMaintenance() {
  const { instId } = useParams();

  const [loading, setLoading] = useState(true);
  const [facultyCourses, setFacultyCourses] = useState([]);
  const [searchField, setSearchField] = useState(""); // [value, setValue]
  const [filteredCourses, setFilteredCourses] = useState(facultyCourses);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(API_BASE_URL + "/FacultyCourses/" + instId)
      .then((response) => {
        setFacultyCourses(response.data);
        setLoading(false);
        console.log(response.data);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
        console.log(error.response.status);
      });
  }, []);

  useEffect(() => {
    const newFilteredCourses = facultyCourses.filter((facultyCourse) => {
      return facultyCourse.courseTitle
        .toLocaleLowerCase()
        .includes(searchField);
    });

    setFilteredCourses(newFilteredCourses);

    console.log("filteredCourses");
    console.log(filteredCourses);
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
      <h1>This is the Course Modification page</h1>

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
