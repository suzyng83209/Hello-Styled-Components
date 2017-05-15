import React from "react";
import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  text-align: center;
`;

export const Header = styled.div`
  background-color: #222;
  height: 144px;
  padding: 24px;
  color: white;
`;

const rotate360 = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const Rotate360 = styled.div`
  display: block;
  animation: ${rotate360} 8s linear infinite;
`;

export const Main = styled.div`
  font-size: 16px;
  padding: 24px;
`;
