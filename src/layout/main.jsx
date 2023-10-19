import React from "react";
import { Movies } from "../components/movies";

class Main extends React.Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    console.log(45);
    fetch("http://www.omdbapi.com/?&apikey=c58f227f&s=matrix")
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  }

  render() {
    const { movies } = this.state;
    return (
      <main className="content container">
        {movies?.length ? (
          <Movies movies={this.state.movies} />
        ) : (
          <h5>loading...</h5>
        )}
      </main>
    );
  }
}

export { Main };
