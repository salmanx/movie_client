import React, { Component } from "react";
import Banner from "./Banner";
import Movies from "../Movies/Movies";
import styled from "styled-components";

export default class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <div>
          <Banner />
          <Movies />
        </div>
      </HomeWrapper>
    );
  }
}

const HomeWrapper = styled.div``;
