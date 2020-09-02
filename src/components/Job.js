import React, { useState } from "react";

export default function Job({ job }) {
  const [show, setShow] = useState(false);
  const show_description = show ? { display: "" } : { display: "none" };
  const text = !show ? "show details" : "hide details";
  return (
    <ul className="job">
      <div>
        <span className="job-title">
          <b>{job.title}-</b>
        </span>
        <span>{job.company}</span>
      </div>
      <li>{new Date(job.created_at).toLocaleDateString()}</li>
      <li>{job.type}</li>
      <li>{job.location}</li>
      <li>
        <a href={job.how_to_apply}>click to apply</a>
      </li>
      <img className="logo" src={job.company_logo} alt="" />
      <li>
        <button onClick={() => setShow(!show)}>{text}</button>
      </li>
      <p style={show_description}>{job.description}</p>
    </ul>
  );
}
