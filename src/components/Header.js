import React from "react";
import styled from "styled-components";

const Header = styled.div`
  background-color: #222;
  height: 144px;
  padding: 24px;
  color: white;
  text-align: center;
`;

const NameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
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

const NickName = styled(Name)`
  color: aqua;
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
        {this.state.nameVisible && <Name color="aqua">Susan</Name>}
        <Name bold>Li</Name>
      </NameWrapper>
    </Header>
  );
}

export default MyHeader;
