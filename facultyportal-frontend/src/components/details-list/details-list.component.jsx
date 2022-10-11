function DetailsList({ course }) {
  const { id, subject, number, title, divisionId, qualId, maxSize, minSize, sectionNumber } =
    course;

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Number</th>
            <th>Title</th>
            <th>Division ID</th>
            <th>Qual Id</th>
            <th>Maximum Size</th>
            <th>Minimum Size</th>
            <th>Section</th>
          </tr>
        </thead>
        <tbody>
          <tr key={id}>
            <td>{subject}</td>
            <td>{number}</td>
            <td>{title}</td>
            <td>{divisionId}</td>
            <td>{qualId}</td>
            <td>{maxSize}</td>
            <td>{minSize}</td>
            <td>{sectionNumber}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DetailsList;
