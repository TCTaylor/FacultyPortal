import DetailsList from "../../components/details-list/details-list.component";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

const API_BASE_URL = "https://localhost:7078/api";

function CourseDetails() {
  const { id } = useParams();

  const [course, setCourse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Will call Courses controller
  useEffect(() => {
    axios
      //.get("https://jsonplaceholder.typicode.com/users")
      .get(API_BASE_URL + "/Courses/" + id)
      .then((response) => {
        setCourse(response.data);
        setLoading(false);
        // console.log(response.data);
      })
      .catch((error) => {
        setError(true);
        setLoading(false);
        // console.log(error);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error occurred.</p>;
  }

  return (
    <div>
      <h3>This is the Course Details page</h3>
      <div key={course[0].id}>
        <DetailsList course={course[0]} />
      </div>
    </div>
  );
}

export default CourseDetails;
