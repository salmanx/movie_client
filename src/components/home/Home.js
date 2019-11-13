import React, { Component } from "react";
import Banner from "./Banner";
import styled from "styled-components";

export default class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <div>
          <Banner />
        </div>
      </HomeWrapper>
    );
  }
}

const HomeWrapper = styled.div``;
