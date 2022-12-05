import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_BASE_URL } from "../../../api/api";
import axios from "axios";

import Error from "../../../components/error/error.component";

function CourseAddForm() {
  const { facultyId } = useParams();

  const [loading, setLoading] = useState(false);
  const [faculty, setFaculty] = useState({});
  const [updatedFormValues, setUpdatedFormValues] = useState({});
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(API_BASE_URL + "/Courses")
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        setError(error);
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
  }, [facultyId]);

  const handleChange = (e) => {
    setUpdatedFormValues({
      ...updatedFormValues,
      facultyId: +facultyId,
      [e.target.name]: +e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(updatedFormValues);
    axios
      .post(API_BASE_URL + "/FacultyCourses", updatedFormValues)
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
      <h3>
        Add Course for {faculty.firstName} {faculty.lastName}
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-sm-3 mt-4">
            <label>Course</label>
            <select
              name="courseId"
              className="form-select"
              onChange={handleChange}
            >
              {courses.map((course) => {
                return (
                  course.divisionId === faculty.divisionId && (
                    <option key={course.id} value={course.id}>
                      {course.subject} {course.number}
                    </option>
                  )
                );
              })}
            </select>
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

export default CourseAddForm;
