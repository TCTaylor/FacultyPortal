import { Link
 } from "react-router-dom";

function CourseMaintList({ courses }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Number</th>
            <th>Title</th>
            <th>Maximum Size</th>
            <th>Minimum Size</th>
            <th>Division</th>
            <th>Section</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => {
            return (
              <tr key={course.id}>
                <td>{course.subject}</td>
                <td>{course.number}</td>
                <td>{course.title}</td>
                <td>{course.maxSize}</td>
                <td>{course.minSize}</td>
                <td>{course.divisionName}</td>
                <td>{course.sectionNumber}</td>
              </tr>
            );
          })}
          <td>
            <Link className="nav-link" to={"/courses-maint/" }>
              <button title="Edit Courses">
                <i className="bi bi-journals"> </i>
                Courses
              </button>
            </Link>
          </td>
          <td>
            <Link to={"/courses-maint/" }>
              <button title="Edit">
                <i className="bi bi-pencil-square"></i>
              </button>
            </Link>
          </td>
          <td>
            <Link to={"/courses-maint" + "/add"}>
              <button title="Add">
                <i className="bi bi-plus-square-fill"></i>
              </button>
            </Link>
          </td>
          <td>
            <Link>
              <button title="Delete">
                <i className="bi bi-x-square-fill"></i>
              </button>
            </Link>
          </td>
        </tbody>
      </table>
    </div>
  );
}

export default CourseMaintList;
