import DetailsList from "../../components/details-list/details-list.component";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const API_BASE_URL = "https://localhost:7078/api";

function CourseDetails() {
  const { id } = useParams();

  const [course, setCourse] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  // Will call Courses controller
  useEffect(() => {
    axios
      //.get("https://jsonplaceholder.typicode.com/users")
      .get(API_BASE_URL + "/Courses/" + id)
      .then((response) => {
        setCourse(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(true);
        setIsLoading(false);
        console.log(error);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error occurred.</p>;
  }
  
  return (
    <div>
      <h3>This is the Course Details page</h3>

      {course.map((courseObj) => {
        return (
          <div key={courseObj.id}>
            <DetailsList course={courseObj} />
          </div>
        );
      })}

    </div>
  );
}

export default CourseDetails;
