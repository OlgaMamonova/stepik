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
      <div classNameName="row">
        <div classNameName="input-field">
          <input
            type="search"
            classNameName="validate"
            placeholder="search"
            value={this.state.search}
            onChange={this.handleChange}
            onKeyDown={this.handleKey}
          />
          <button
            classNameName="btn search-btn"
            onClick={() =>
              this.props.searchMovies(this.state.search, this.state.type)
            }
          >
            search
          </button>
        </div>
        <div classNameName="radio-wrap">
          <p>
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
          </p>
          <p>
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
          </p>
          <p>
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
          </p>
        </div>
      </div>
    );
  }
}

export { Search };
