import React, { Component } from "react";
import styled from 'styled-components';
import MyHeader from './components/Header';
import logo from "./logo.svg";

const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  max-width: 1024px;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <MyHeader />
        <Content />
      </Container>
    );
  }
}

export default App;
