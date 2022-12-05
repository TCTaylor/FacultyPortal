import Error from "../../../components/error/error.component";

import { useState, useEffect } from "react";
import { API_BASE_URL } from "../../../api/api";

import axios from "axios";

function FacultyAddForm() {
  const [loading, setLoading] = useState(false);
  const [updatedFormValues, setUpdatedFormValues] = useState({});
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

  const handleChange = (e) => {
    setUpdatedFormValues({
      ...updatedFormValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(API_BASE_URL + "/Faculty", updatedFormValues)
      .then((response) => {
        if (response) setLoading(false);
      })
      .catch((error) => {
        setError(error);
      });
  };

  if (error) {
    return <Error error={error.response.status} />;
  }

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-sm-3 mt-4">
            <label>ID</label>
            <input
              type="number"
              max={999999999}
              min={100000001}
              name="instId"
              className="form-control"
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3 mt-4">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              maxLength={50}
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="col-sm-3 mt-4">
            <label>M. I.</label>
            <input
              type="text"
              name="midInit"
              maxLength={1}
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="col-sm-3 mt-4">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              maxLength={50}
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="col-sm-3 mt-4">
            <label>Suffix</label>
            <input
              type="text"
              name="suffix"
              maxLength={10}
              className="form-control"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3 mt-4">
            <label>Division</label>
            <select name="divisionId" className="form-select">
              {divisions.map((division) => {
                return (
                  <option key={division.id} value={division.id}>
                    {division.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col-sm-3 mt-4">
            <label>Qualifications</label>
            <input
              type="text"
              name="credential"
              maxLength={50}
              className="form-control"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary mt-4">
          {loading && (
            <span
              className="spinner-border spinner-border-sm"
              role="status"
            ></span>
          )}
          Save
        </button>
      </form>
    </div>
  );
}

export default FacultyAddForm;
