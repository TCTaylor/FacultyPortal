function DetailsList({ course }) {
  const { id, subject, number, title, maxSize, minSize, divisionName, sectionNumber } =
    course;

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
          <tr key={id}>
            <td>{subject}</td>
            <td>{number}</td>
            <td>{title}</td>
            <td>{maxSize}</td>
            <td>{minSize}</td>
            <td>{divisionName}</td>
            <td>{sectionNumber}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DetailsList;
