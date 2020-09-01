import React from "react";
import "./App.scss";
import useFetchJobs from "./useFetchJobs";
import { useState } from "react";
import Job from "./components/Job";
import SearchForm from "./components/SearchForm";

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error } = useFetchJobs(params, page);

  function handleParamChange(e) {
    const param = e.target.name;
    const value = e.target.value;
    setParams({ ...params, [param]: value });
  }
  return (
    <div className="container">
      <h2 className="heading">jobs opening</h2>
      <SearchForm
        params={params}
        onParamChange={handleParamChange}
      ></SearchForm>
      {loading && <h2>loading...</h2>}
      {error && <h2>Error...</h2>}
      {jobs.map((job) => (
        <Job key={job.id} job={job} />
      ))}
    </div>
  );
}

export default App;
