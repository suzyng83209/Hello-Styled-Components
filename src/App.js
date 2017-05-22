import React, { Component } from "react";
import styled from "styled-components";

import MyHeader from "./components/Header";
import TopNav from "./components/TopNav";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const Content = styled.div`
  overflow: auto;
  width: 100%;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <TopNav />
        <Content>
          <MyHeader />
        </Content>
      </Container>
    );
  }
}

export default App;
