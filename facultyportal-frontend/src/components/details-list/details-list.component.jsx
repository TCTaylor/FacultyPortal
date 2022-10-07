function DetailsList({ course }) {
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

  return (
    <div>
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

export default DetailsList;
