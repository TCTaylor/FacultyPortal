import { Link } from "react-router-dom";

function FacultyList({ faculty }) {
  return (
    <div>
      <div style={{float: 'right', paddingRight: '20px'}}>
        <Link to={"/faculty-maint" + "/add"}>
          <button className="btn btn-primary" title="Add">
            <i className="bi bi-plus-lg"> </i>
            Add Faculty
          </button>
        </Link>
      </div>
      <table className="table table-sm table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">M. I.</th>
            <th scope="col">Suffix</th>
            <th scope="col">Qualifications</th>
          </tr>
        </thead>
        <tbody>
          {faculty.map((fac) => {
            return (
              <tr key={fac.id}>
                <td>{fac.instId}</td>
                <td>{fac.firstName}</td>
                <td>{fac.lastName}</td>
                <td>{fac.midInit}</td>
                <td>{fac.suffix}</td>
                <td>
                  <table>
                    <tbody>
                      {fac.qualifications.map((qual) => {
                        return (
                          <tr key={qual.id}>
                            <td>{qual.credential}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </td>
                <td>
                  <Link to={"/courses-maint/" + fac.instId}>
                    <button
                      className="btn btn-outline-secondary"
                      title="Edit Courses"
                    >
                      <i className="bi bi-journals"> </i>
                      Courses
                    </button>
                  </Link>
                </td>
                <td>
                  <Link to={"/faculty-maint/" + fac.id}>
                    <button className="btn btn-dark" title="Edit">
                      <i className="bi bi-pencil-square"></i>
                    </button>
                  </Link>
                </td>
                <td>
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

export default FacultyList;
