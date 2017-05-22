import React, { Component } from "react";
import styled from "styled-components";

import MyHeader from "./components/Header";
import TopNav from "./components/TopNav";
import Introduction from './components/Introduction';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

const Full = styled.div`
  width: 100%;
`;

const Content = styled.div`
  max-width: 1024px;

  div {
    padding: 8vw 0;
  }
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Full>
          <TopNav />
          <MyHeader />
        </Full>
        <Content>
          <Introduction />
        </Content>
      </Container>
    );
  }
}

export default App;
