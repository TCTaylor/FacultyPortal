import { useState, useEffect } from "react";
import useAuth from "../../hooks/use-auth";

import { API_BASE_URL } from "../../api/api";
import axios from "axios";

import CourseList from "../../components/course-list/course-list.component";
import SearchBox from "../../components/search-box/search-box.component";
import Loading from "../../components/loading/loading.component";
import Error from "../../components/error/error.component";

function FacultyCourses() {
  const [loading, setLoading] = useState(true);
  const [facultyCourses, setFacultyCourses] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filteredCourses, setFilteredCourses] = useState(facultyCourses);
  const [error, setError] = useState(null);

  const { facultyId } = useAuth();

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
        //console.log(error.response.status);
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
