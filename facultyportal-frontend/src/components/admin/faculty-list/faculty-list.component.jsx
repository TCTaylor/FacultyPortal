import { Link } from "react-router-dom";

function FacultyList({ faculty }) {
  // faculty.map((fac) => {
  //   fac.qualifications.map((qual) => {
  //     console.log(qual);
  //   });
  // });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>M. I.</th>
            <th>Suffix</th>
            <th>Qualifications</th>
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
                <td>{fac.credential}</td>
                {/* <td>
                  <table>
                    <tbody>
                      {fac.qualifications.map((facQual) => {
                        <tr key={facQual.id}>
                          <td>{facQual.credential}</td>
                        </tr>;
                      })}
                    </tbody>
                  </table>
                </td> */}
                <td>
                  <Link to={"/courses-maint/" + fac.instId}>
                    <button title="Edit Courses">
                      <i className="bi bi-journals"> </i>
                      Courses
                    </button>
                  </Link>
                </td>
                <td>
                  <Link to={"/faculty-maint/" + fac.id}>
                    <button title="Edit">
                      <i className="bi bi-pencil-square"></i>
                    </button>
                  </Link>
                </td>
                <td>
                  <Link to={"/faculty-maint" + "/add"}>
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

export default FacultyList;
