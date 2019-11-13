import React, { Component } from "react";

const MoviesContext = React.createContext();
const MoviesConsumer = MoviesContext.Consumer;

class MoviesProvider extends Component {
  state = {};

  componentDidMount = () => {
    console.log("context provider mounted");
  };



  render() {
    return (
      <MoviesContext.Provider
        value={{
          ...this.state
        }}
      >
        {this.props.children}
      </MoviesContext.Provider>
    );
  }
}

export { MoviesConsumer, MoviesProvider };
