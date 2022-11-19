function DetailsList({ course }) {
  const {
    id,
    subject,
    number,
    title,
    maxSize,
    minSize,
    sectionNumber,
  } = course;

  return (
    <div>
      <table className="table">
      <thead className="table-dark">
          <tr>
            <th scope="col">Subject</th>
            <th scope="col">Number</th>
            <th scope="col">Title</th>
            <th scope="col">Maximum Size</th>
            <th scope="col">Minimum Size</th>
            <th scope="col">Section</th>
          </tr>
        </thead>
        <tbody>
          <tr key={id}>
            <td>{subject}</td>
            <td>{number}</td>
            <td>{title}</td>
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
