import DetailsList from "../../components/details-list/details-list.component";
import Error from "../../components/error/error.component";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

const API_BASE_URL = "https://localhost:7078/api";

function CourseDetails() {
  const { id } = useParams();

  const [course, setCourse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Will call Courses controller
  useEffect(() => {
    axios
      .get(API_BASE_URL + "/Courses/" + id)
      .then((response) => {
        setCourse(response.data);
        setLoading(false);
        // console.log(response.data);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
        console.log(error);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <Error error={error.response.status} />;
  }

  return (
    <div className="container mt-4">
      <h3>This is the Course Details page</h3>
      <div key={course[0].id}>
        <DetailsList course={course[0]} />
      </div>
    </div>
  );
}

export default CourseDetails;
