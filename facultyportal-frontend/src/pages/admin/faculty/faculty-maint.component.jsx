import FacultyList from "../../../components/faculty-maint/faculty-maint.component";
import SearchBox from "../../components/search-box/search-box.component";
import Loading from "../../components/loading/loading.component";

import { useState, useEffect } from "react";

import axios from "axios";

const API_BASE_URL = "https://localhost:7078/api";

function FacultyMaintenance() {
  const [loading, setLoading] = useState(true);
  const [faculty, setFaculty] = useState([]);
  const [searchField, setSearchField] = useState(""); // [value, setValue]
  const [filteredFaculty, setFilteredFaculty] = useState(faculty);
  const [error, setError] = useState(false);

  // Will call the Faculty controller
  useEffect(() => {
    axios
      .get(API_BASE_URL + "/Faculty")
      .then((response) => {
        setFaculty(response.data);
        setLoading(false);
        console.log(response.data);
      })
      .catch((error) => {
        setError(true);
        setLoading(false);
        console.log(error);
      });
  }, []);

  // TODO - search by last name, first name, or ID
  useEffect(() => {
    const newFilteredFaculty = faculty.filter((fac) => {
      return fac.lastName.toLocaleLowerCase().includes(searchField);
    });

    setFilteredFaculty(newFilteredFaculty);
  }, [facultyCourses, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>An error occurred.</p>;
  }

  return (
    <div>
      <SearchBox
        className="search-box"
        type="search"
        placeholder="Search faculty"
        onChangeHandler={onSearchChange}
      />
      <FacultyList faculty={filteredFaculty} />
    </div>
  );
}

export default FacultyMaintenance;
