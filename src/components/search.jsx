import React from "react";

class Search extends React.Component {
  state = {
    search: "",
    type: "all",
  };

  handleChange = (evt) => {
    this.setState({ search: evt.target.value });
  };

  handleKey = (evt) => {
    if (evt.key === "Enter") {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };

  handleFilter = (evt) => {
    this.setState(
      () => ({ type: evt.target.dataset.type }),
      () => this.props.searchMovies(this.state.search, this.state.type)
    );
  };

  render() {
    return (
      <div className="row">
        <div className="input-field">
          <input
            type="search"
            className="validate"
            placeholder="search"
            value={this.state.search}
            onChange={this.handleChange}
            onKeyDown={this.handleKey}
          />
          <button
            className="btn search-btn"
            onClick={() =>
              this.props.searchMovies(this.state.search, this.state.type)
            }
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
              onChange={this.handleFilter}
              checked={this.state.type === "all"}
            />
            <span>All</span>
          </label>

          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="movie"
              onChange={this.handleFilter}
              checked={this.state.type === "movie"}
            />
            <span>Movies only</span>
          </label>

          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="series"
              onChange={this.handleFilter}
              checked={this.state.type === "series"}
            />
            <span>Series only</span>
          </label>
        </div>
      </div>
    );
  }
}

export { Search };
