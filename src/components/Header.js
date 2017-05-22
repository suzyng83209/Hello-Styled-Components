import React from "react";
import styled from "styled-components";

const Header = styled.div`
  background-color: #222;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 240px;
  padding: 24px;
  padding-bottom: 30px;
  color: white;
  text-align: center;
`;

const NameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Name = styled.div`
  font-weight: ${props => (props.bold ? "600" : "300")};
  color: ${props => (props.color ? props.color : "#fff")};
  font-size: 36px;
  padding: 24px 8px;
  text-transform: uppercase;
  pointer-events: none;
`;

const Separator = styled.div`
  height: 4px;
  width: 4px;
  background: aqua;
  transform: rotate(45deg);
`;

class MyHeader extends React.Component {
  state = { nameVisible: false };

  setNameVisible = () => this.setState(() => ({ nameVisible: true }));
  setNameInvisible = () => this.setState(() => ({ nameVisible: false }));

  render = () => (
    <Header>
      <NameWrapper
        onMouseOver={this.setNameVisible}
        onMouseOut={this.setNameInvisible}
      >
        <Name>Chuqian</Name>
        {this.state.nameVisible
          ? <Name color="aqua">Susan</Name>
          : <Separator />}
        <Name bold>Li</Name>
      </NameWrapper>
    </Header>
  );
}

export default MyHeader;
