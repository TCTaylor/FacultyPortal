import Loading from "../../../components/loading/loading.component";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const API_BASE_URL = "https://localhost:7078/api";

function FacultyForm() {
  const { id } = useParams();

  const [formValues, setFormValues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Will call Courses controller
  useEffect(() => {
    axios
      //.get("https://jsonplaceholder.typicode.com/users")
      .get(API_BASE_URL + "/Faculty/" + id)
      .then((response) => {
        setFormValues(response.data);
        setLoading(false);
        console.log(response.data);
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
      <input title="qualifications" placeholder={formValues[0].qualifications[0]} />
    </div>
  );
}

export default FacultyForm;
