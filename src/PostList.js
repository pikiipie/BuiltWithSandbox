export const PostsList = ({
  records,
  currentPage,
  recordsPerPage,
  handleOnChange
}) => {
  const indexOfLastRecords = currentPage * recordsPerPage;
  const indexOfFirstRecords = indexOfLastRecords - recordsPerPage;
  let recordsNumber = indexOfFirstRecords + 1;

  return (
    <ul className="post__lists">
      <div className="form__group">
        <label htmlFor="select">data per page</label>
        <select name="select" onChange={(e) => handleOnChange(e)}>
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
      </div>
      {records.slice(indexOfFirstRecords, indexOfLastRecords).map((item) => (
        <li key={item.id}>
          <h4>
            ({recordsNumber++}) {item.title}
          </h4>
          <p>{item.body}</p>
        </li>
      ))}
    </ul>
  );
};
