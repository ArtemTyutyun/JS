import React, { useState } from "react";
import JobForm from "./components/JobForm";
import JobListing from "./components/JobListing";
import Counter from "./Counter/counter";
import "./App.css";

const App = () => {
  const [jobs, setJobs] = useState([]);

  const addJob = (job) => {
    setJobs([...jobs, job]);
  };

  return (
    <div className="fp">
      <h1 className="jb">Job Listings</h1>
      <JobForm addJob={addJob} />
      <JobListing jobs={jobs} />

      <h1 className="count">My Counter App</h1>
      <Counter />
    </div>
  );
};

export default App;
