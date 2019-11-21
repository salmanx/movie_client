import React, { Component } from "react";
import Filter from "./Filter";
import Movies from "../movies/Movies";
import styled from "styled-components";

export default class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <div>
          <Filter />
          <Movies />
        </div>
      </HomeWrapper>
    );
  }
}

const HomeWrapper = styled.div``;
