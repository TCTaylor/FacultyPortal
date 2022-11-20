import CourseMaintList from "../../../components/admin/course-list/course-list.component";
import SearchBox from "../../../components/search-box/search-box.component";
import Loading from "../../../components/loading/loading.component";
import Error from "../../../components/error/error.component";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

const API_BASE_URL = "https://localhost:7078/api";

function CourseMaintenance() {
  const { facultyId } = useParams();

  const [loading, setLoading] = useState(true);
  const [facultyCourses, setFacultyCourses] = useState([]);
  const [faculty, setFaculty] = useState({});
  const [searchField, setSearchField] = useState("");
  const [filteredCourses, setFilteredCourses] = useState(facultyCourses);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(API_BASE_URL + "/FacultyCourses/" + facultyId)
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
    axios
      .get(API_BASE_URL + "/Faculty/" + facultyId)
      .then((response) => {
        setFaculty(response.data);
      })
      .catch((error) => {
        setError(error);
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
      <h2>Courses for {faculty.firstName} {faculty.lastName}</h2>
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
