function FacultyList({ faculty }) {
  return (
    <div>
      <table>
        <thead>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>M. I.</th>
          <th>Suffix</th>
          <th>Qualifications</th>
        </thead>
        <tbody>
          {faculty.map((fac) => {
            <tr key={fac.id}>
              <td>{fac.firstName}</td>
              <td>{fac.lastName}</td>
              <td>{fac.midInit}</td>
              <td>{fac.suffix}</td>
              {/* <td>
                <table>
                  <tbody>
                    {faculty.qualifications.map((qual) => {
                      <tr key={qual.id}>
                        <td>{qual.credential}</td>
                      </tr>;
                    })}
                  </tbody>
                </table>
              </td> */}
            </tr>;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default FacultyList;
