import styled from "styled-components";

const getType = ({ type }) => {
  switch (type) {
    case "dark":
      return {
        background: "transparent",
        border: "1px solid  #FFFFFF",
        fontWeight: "900",
        color: "#FFFFFF",
      };
    case "light":
      return {
        background: "#FFFFFF",
        border: "1px solid #e6e9ec",
        color: "#FFFFFF",
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
const Container = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  min-width: 120px;
  font-size: 14px;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "14px")};
  height: ${({ height }) => (height ? `${height}px` : "42px")};
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  outline: none;
  border: 1px solid #e6e9ec;
  padding-left: ${({ icon }) => (icon ? "40px" : "20px")};
  /* ${getType} */
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: ${({ width }) => (width ? `${width}px` : "100%")};
`;
const Icon = styled.div`
  position: absolute;
  left: 5px;
`;
export { Container, Wrapper, Icon };
