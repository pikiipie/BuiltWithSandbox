import { useState, useEffect } from "react";
import "./styles.css";
import { PostsList } from "./PostList";
import { Pagination } from "./Pagination";

export default function App() {
  const [records, setRecords] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);

  const getPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    setRecords(data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  const handlePaginate = (pageNumber) => {
    setCurrPage(pageNumber);
  };

  const changeDataPerPage = (e) => {
    setRecordsPerPage(e.target.value);
  };

  return (
    <div className="App">
      <h1>List News</h1>
      <PostsList
        records={records}
        currentPage={currPage}
        recordsPerPage={recordsPerPage}
        handleOnChange={changeDataPerPage}
      />
      <Pagination
        totalRecords={records.length}
        currentPage={currPage}
        recordsPerPage={recordsPerPage}
        paginate={handlePaginate}
      />
    </div>
  );
}
