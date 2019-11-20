import React, { Component } from "react";
import styled from "styled-components";

class Default extends Component {
  render() {
    const backgroundColor = {
      background: "#f8f9fa"
    };
    return (
      <DefaultWrapper>
        <div className="py-5" style={backgroundColor}>
          <div className="container">
            <div className="col-md-8 default-page-content">
              <h2>
                <strong>OPS!!</strong> The page or movie you are looking for is
                not found.
              </h2>
              <p></p>
            </div>
          </div>
        </div>
      </DefaultWrapper>
    );
  }
}

const DefaultWrapper = styled.div`
  .default-page-content {
    h2 {
      text-transform: uppercase;
      color: #6610f2;
      font-family: "Lato", sans-serif;
      padding: 20px 0px;
      font-weight: bold;
      letter-spacing: 2px;
      line-height: 50px;
    }
  }
`;

export default Default;
