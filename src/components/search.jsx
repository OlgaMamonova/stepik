import React from "react";

class Search extends React.Component {
  state = { search: "" };

  handleChange = (evt) => {
    this.setState({ search: evt.target.value });
  };

  handleKey = (evt) => {
    if (evt.key === "Enter") {
      this.props.searchMovies(this.state.search);
    }
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
            onClick={() => this.props.searchMovies(this.state.search)}
          >
            search
          </button>
        </div>
      </div>
    );
  }
}

export { Search };
