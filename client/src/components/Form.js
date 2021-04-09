import React from "react";

function SearchForm({ q, handleFormInput, handleSubmit }) {
  return (
    <>
      <input value={q} onChange={handleFormInput} />
      <button onClick={handleSubmit}>Search for Books</button>
    </>
  );
}

export default SearchForm;
