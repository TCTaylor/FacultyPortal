import DetailsList from "../../components/details-list/details-list.component";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";

const API_BASE_URL = "https://localhost:7078/api";

function CourseDetails() {
  const { id } = useParams();

  const [course, setCourse] = useState([]);
  // const [error, setError] = useState(Error());

  // Will call data from FacultyCourse controller
  useEffect(() => {
    axios
      .get(API_BASE_URL + "/Courses/" + id)
      .then((response) => {
        setCourse(response.data);
      })
      .catch((error) => {
        console.log("Error in CourseDetails");
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h3>This is the Course Details page</h3>

      <DetailsList course={course} />
      
    </div>
  );
}

export default CourseDetails;
