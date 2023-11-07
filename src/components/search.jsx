import React, { useState } from "react";

const Search = (props) => {
  const { searchMovies = Function.prototype } = props;
  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");

  const handleChange = (evt) => {
    setSearch(evt.target.value);
  };

  const handleKey = (evt) => {
    if (evt.key === "Enter") {
      searchMovies(search, type);
    }
  };

  const handleFilter = (evt) => {
    setType(evt.target.dataset.type);
    searchMovies(search, evt.target.dataset.type);
  };

  return (
    <div className="row">
      <div className="input-field">
        <input
          type="search"
          className="validate"
          placeholder="search"
          value={search}
          onChange={handleChange}
          onKeyDown={handleKey}
        />
        <button
          className="btn search-btn"
          onClick={() => searchMovies(search, type)}
        >
          search
        </button>
      </div>
      <div className="radio-wrap">
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="all"
            onChange={handleFilter}
            checked={type === "all"}
          />
          <span>All</span>
        </label>

        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="movie"
            onChange={handleFilter}
            checked={type === "movie"}
          />
          <span>Movies only</span>
        </label>

        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="series"
            onChange={handleFilter}
            checked={type === "series"}
          />
          <span>Series only</span>
        </label>
      </div>
    </div>
  );
};

export { Search };
