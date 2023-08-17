export const Pagination = ({
  totalRecords,
  currentPage,
  recordsPerPage,
  paginate
}) => {
  const pageNumbers = [...Array(Math.ceil(totalRecords / recordsPerPage))];
  return (
    <ul className="paging">
      <li
        onClick={() => currentPage !== 1 && paginate(currentPage - 1)}
        className={currentPage === 1 ? "disable" : ""}
      >
        Prev
      </li>
      {pageNumbers.map((_, pageNumber) => (
        <li
          key={pageNumber + 1}
          onClick={() => paginate(pageNumber + 1)}
          className={pageNumber + 1 === currentPage ? "active" : ""}
        >
          {pageNumber + 1}
        </li>
      ))}
      <li
        onClick={() =>
          currentPage !== recordsPerPage && paginate(currentPage + 1)
        }
        className={currentPage === recordsPerPage ? "disable" : ""}
      >
        Next
      </li>
    </ul>
  );
};
