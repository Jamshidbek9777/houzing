// import React from "react";
import styled from "styled-components";
// import {ReactComponent as filter} from "../../../assets/icons/filter-input.svg"4
const getType = ({type}) => {
  switch (type) {
    case "dark":
      return {
        background: "transparent",
        border: "1px solid  #FFFFFF",
        fontWeight: '900',
        color: "#FFFFFF",
      };
    case "light":
      return {
        background: "#FFFFFF",
        border: "1px solid #e6e9ec",
        color: "black",
      };
      case "primary":
        return {
        background: "#0061df",
        border: "none",
        color: "#FFFFFF",
      };
    default:
      return {
        background: "#0061df",
        border: "none",
        color: "#FFFFFF",
      };
  }
};
const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  min-width: 120px;
  font-size: 14px;
  cursor: pointer;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "14px")};
  height: ${({ height }) => (height ? `${height}px` : "44px")};
  width: ${({ width }) => (width ? `${width}px` : "130px")};
  ${getType}
  :active{
    opacity: 0.7;
  }
`;

export { Container };