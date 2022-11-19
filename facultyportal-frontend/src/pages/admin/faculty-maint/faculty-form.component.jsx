import Loading from "../../../components/loading/loading.component";
import Error from "../../../components/error/error.component";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const API_BASE_URL = "https://localhost:7078/api";

function FacultyForm() {
  const { id } = useParams();

  const [formValues, setFormValues] = useState({});
  const [divisions, setDivisions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(API_BASE_URL + "/Faculty/" + id)
      .then((response) => {
        setFormValues(response.data);
        setLoading(false);
        // console.log(response.data);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
        // console.log(error);
      });
  }, []);

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

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error.response.status} />;
  }

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
        <label>ID</label>
        <input disabled placeholder={formValues.instId} />

        <label>First Name</label>
        <input placeholder={formValues.firstName} />

        <label>Last Name</label>
        <input placeholder={formValues.lastName} />

        <label>M. I.</label>
        <input placeholder={formValues.midInit} />

        <label>Suffix</label>
        <input placeholder={formValues.suffix} />

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

        <label>Qualifications</label>
        {formValues.qualifications.map((qual) => {
          return <input key={qual.id} placeholder={qual.credential} />;
        })}
      </form>
    </div>
  );
}

export default FacultyForm;
