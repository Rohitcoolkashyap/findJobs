import React from "react";

export default function SearchForm({ params, onParamChange }) {
  return (
    <form className="">
      <input
        onChange={onParamChange}
        type="text"
        name="description"
        value={params.description}
        placeholder="description"
      />
      <input
        onChange={onParamChange}
        type="text"
        name="location"
        value={params.location}
        placeholder="location"
      />
    </form>
  );
}
