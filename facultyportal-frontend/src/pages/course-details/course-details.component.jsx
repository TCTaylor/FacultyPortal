import DetailsList from "../../components/details-list/details-list.component";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const API_BASE_URL = "https://localhost:7078/api";

function CourseDetails() {

  const location = useLocation();
  const course = location.state?.course;

  const {
    id,
    subject,
    number,
    title,
    division_Id,
    qual_Id,
    max_Size,
    min_Size,
  } = course;
  //const [course, setCourse] = useState([]);
  //const [error, setError] = useState(Error());

  // Will call data from CourseDetail controller
  // useEffect(() => {
  //   axios(API_BASE_URL + "/Courses")
  //     .then((response) => {
  //       setCourse(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       console.log(error.response.data);
  //     });
  // }, []);

  return (
    <div>
      <h3>This is the Course Details page</h3>
      {/* <DetailsList course={course} /> */}
      <table>
        <tbody>
          <tr key={id}>
          <td>{subject}</td>
          <td>{number}</td>
          <td>{title}</td>
          <td>{division_Id}</td>
          <td>{qual_Id}</td>
          <td>{max_Size}</td>
          <td>{min_Size}</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CourseDetails;
