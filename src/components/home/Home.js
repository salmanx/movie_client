import React, { Component } from "react";
import Banner from "./Banner";
import Filter from "./Filter";
import Movies from "../Movies/Movies";
import styled from "styled-components";

export default class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <div>
          {/* <Banner /> */}
          <Filter />
          <Movies />
        </div>
      </HomeWrapper>
    );
  }
}

const HomeWrapper = styled.div``;
