import React, { useState } from "react";

export default function Job({ job }) {
  const [show, setShow] = useState(false);
  const show_description = show ? { display: "" } : { display: "none" };
  return (
    <div className="job">
      <div>
        <span className="job-title">
          <b>{job.title}-</b>
        </span>
        <span>{job.company}</span>
      </div>
      <p>{new Date(job.created_at).toLocaleDateString()}</p>
      <p>{job.type}</p>
      <p>{job.location}</p>
      <p>
        <a href={job.how_to_apply}>click to apply</a>
      </p>
      <img className="logo" src={job.company_logo} alt="" />
      <button onClick={() => setShow(!show)}>show details</button>
      <p style={show_description}>{job.description}</p>
    </div>
  );
}
