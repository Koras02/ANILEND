import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import Image from "./images/ASKA.jpg";
import Image2 from "./images/HISTOREA2.png";

export const AnimerWrapper = styled.div`
  position: fixed;
  top: -20px;
  //   background: ${({ scrollNav }) => (scrollNav ? "blue" : "none")};
  //   background: url(${({ scrollNav }) => (scrollNav ? "red" : "none")});
  background: url(${Image}) no-repeat;
  display: ${({ scrollNav }) => (scrollNav ? "none" : "block")};
  background-size: cover;
  transition: 4.5s;
  width: 100%;
`;

export const AnimerWrapper2 = styled.div`
  transition: 4.5s;
  z-index: 1;
  display: ${({ scrollNav }) => (scrollNav ? "none" : "block")};
`;

export const AnimerWrapper3 = styled.div`
  position: fixed;
  z-index: 999;
  top: -20px;
  display: ${({ scrollNav }) => (scrollNav ? "block" : "none")};
  //   background-size: cover;
  transition: 4.5s;
  background: url(${Image2}) no-repeat;
  background-size: 100% 300px;
  width: 100%;
  height: 200px;
`;

export const AnimerWrapper4 = styled.div`
  transition: 4.5s;
  display: ${({ scrollNav }) => (scrollNav ? "block" : "block")};
  transition: 5s;
`;

export const Router = styled.a``;
