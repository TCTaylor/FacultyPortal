import { Link } from "react-router-dom";

function CourseMaintList({ courses }) {

  // console.log(courses);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Number</th>
            <th>Title</th>
            <th>Section</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => {
            return (
              <tr key={course.courseId}>
                <td>{course.courseSubject}</td>
                <td>{course.courseNumber}</td>
                <td>{course.courseTitle}</td>
                <td>{course.sectionNumber}</td>
                <td>
                  <Link className="nav-link" to={"/courses-maint/"}>
                    <button title="Edit Courses">
                      <i className="bi bi-journals"> </i>
                      Courses
                    </button>
                  </Link>
                </td>
                <td>
                  <Link to={"/courses-maint/"}>
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
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CourseMaintList;
