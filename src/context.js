import React, { Component } from "react";
import axios from "axios";
import { apiUrl } from "./config";
const MovieContext = React.createContext();
const MoviesConsumer = MovieContext.Consumer;

class MoviesProvider extends Component {
  state = {
    movies: [],
    loading: null
  };

  componentDidMount = () => {
    this.setState({ loading: true });
    axios
      .get(`${apiUrl}/movies`)
      .then(res => {
        this.setState({
          movies: res.data,
          loading: false
        });
      })
      .catch(err => console.log(err));
    this.setState({ loading: null });
  };

  filterMoviesByCategory = cat => {
    this.setState({ loading: true });
    const url =
      cat == null ? `${apiUrl}/movies` : `${apiUrl}/movies?category=${cat.id}`;
    axios
      .get(url)
      .then(res => {
        this.setState({
          movies: res.data,
          loading: false
        });
      })
      .catch(err => console.log(err));
    this.setState({ loading: null });
  };

  render() {
    return (
      <MovieContext.Provider
        value={{
          ...this.state,
          filterMoviesByCategory: this.filterMoviesByCategory
        }}
      >
        {this.props.children}
      </MovieContext.Provider>
    );
  }
}

export { MoviesConsumer, MoviesProvider };
