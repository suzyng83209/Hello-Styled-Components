import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Container, Header, Rotate360, Main } from "./StyledComponents";

class App extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Rotate360>
            <img src={logo} className="App-logo" alt="logo" />
          </Rotate360>
          <h2>HELLO WORLD</h2>
        </Header>
        <Main>
          I will use this to primarily test Styled Components
        </Main>
      </Container>
    );
  }
}

export default App;
