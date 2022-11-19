import FacultyList from "../../../components/admin/faculty-list/faculty-list.component";
import SearchBox from "../../../components/search-box/search-box.component";
import Loading from "../../../components/loading/loading.component";
import Error from "../../../components/error/error.component";

import { useState, useEffect } from "react";

import axios from "axios";

const API_BASE_URL = "https://localhost:7078/api";

function FacultyMaintenance() {
  const [loading, setLoading] = useState(true);
  const [faculty, setFaculty] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filteredFaculty, setFilteredFaculty] = useState(faculty);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(API_BASE_URL + "/Faculty")
      .then((response) => {
        setFaculty(response.data);
        setLoading(false);
        // console.log(response.data);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
        console.log(error);
      });
  }, []);

  // Search by last name or ID
  useEffect(() => {
    const newFilteredFaculty = faculty
      .reduce((a, v) => a.concat(v), [])
      .filter((fac) => {
        if (isNaN(+searchField)) {
          return fac.lastName.toLocaleLowerCase().includes(searchField);
        } else {
          return fac.instId.toString().includes(searchField);
        }
      });
    setFilteredFaculty(newFilteredFaculty);
  }, [faculty, searchField]);

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
      <SearchBox
        className="search-box m-4"
        type="search"
        placeholder="Search faculty"
        onChangeHandler={onSearchChange}
      />
      <FacultyList faculty={filteredFaculty} />
    </div>
  );
}

export default FacultyMaintenance;
