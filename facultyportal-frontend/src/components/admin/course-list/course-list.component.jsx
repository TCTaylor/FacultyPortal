import { Link } from "react-router-dom";

function CourseMaintList({ courses }) {
  // console.log(courses);
  return (
    <div>
      <div style={{float: 'right', paddingRight: '20px'}}>
        <Link to={"/courses-maint" + "/add"}>
          <button className="btn btn-primary" title="Add">
            <i className="bi bi-plus-lg"> </i>
            Add Course
          </button>
        </Link>
      </div>
      <table className="table table-sm table-hover">
        <thead>
          <tr>
            <th scope="col">Subject</th>
            <th scope="col">Number</th>
            <th scope="col">Title</th>
            <th scope="col">Section</th>
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
                <td width={60}>
                  <Link to={"/courses-maint/"}>
                    <button className="btn btn-dark" title="Edit">
                      <i className="bi bi-pencil-square"></i>
                    </button>
                  </Link>
                </td>
                <td width={60}>
                  <Link>
                    <button className="btn btn-outline-danger" title="Delete">
                      <i className="bi bi-trash3-fill"></i>
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
