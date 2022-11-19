import DetailsList from "../../components/details-list/details-list.component";
import Loading from "../../components/loading/loading.component";
import Error from "../../components/error/error.component";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

const API_BASE_URL = "https://localhost:7078/api";

function CourseDetails() {
  const { id } = useParams();

  const [course, setCourse] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        // console.log(error);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error.response.status} />;
  }

  return (
    <div className="container mt-4">
      <h2>Course Details</h2>
      <div className="mt-4" key={course.id}>
        <DetailsList course={course} />
      </div>
    </div>
  );
}

export default CourseDetails;
