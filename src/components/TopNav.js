import React from "react";
import styled from "styled-components";

const NavWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 40px;
  background: rgba(0, 0, 0, 0.5);
  padding: 16px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavOptions = styled.div`
  width: 100%;
  max-width: 1024px;
`;

export default () => (
  <NavWrapper>
    <NavOptions>Hello</NavOptions>
  </NavWrapper>
);
