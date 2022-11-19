import Loading from "../../../components/loading/loading.component";
import Error from "../../../components/error/error.component";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const API_BASE_URL = "https://localhost:7078/api";

function CoursesForm() {
  const { id } = useParams();

  const [formValues, setFormValues] = useState({});
  const [divisions, setDivisions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(API_BASE_URL + "/Divisions")
      .then((response) => {
        setDivisions(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  if (error) {
    return <Error error={error.response.status} />;
  }

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
        <label>Subject</label>
        <input placeholder="Course Subject..."/>

        <label>Number</label>
        <input placeholder="Course Number..." />

        <label>Title</label>
        <input placeholder="Course Title..." />

        <label>Maximum Size</label>
        <input placeholder="Max Size..." />

        <label>Minimum Size</label>
        <input placeholder="Min Size..." />

        <label>
          Division
          <select>
            {divisions.map((division) => {
              <option key={division.id} value={division.id}>
                {division.name}
              </option>;
            })}
          </select>
        </label>

        <label>Section</label>
        <input placeholder="Section Number..." />
      </form>
    </div>
  );
}

export default CoursesForm;
