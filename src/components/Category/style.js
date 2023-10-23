import React from "react";
import leftarrow from "../../assets/icons/left-arrow.svg";
import rightarrow from "../../assets/icons/right-arrow.svg";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  padding: 96px 130px;
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 1440px;
  width: 100%;
`;
const Icons = styled.div``;

Icons.LeftArrow = styled.img`
  position: absolute;
  top: 42%;
  width: 50px;
  height: 50px;
  padding: 18px;
  background-color: black;
  /* opacity: 0.7; */
  background: rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  left: 20px;
  :hover {
    opacity: 0.4;
  }
`;
Icons.RightArrow = styled.img`
  position: absolute;
  top: 42%;
  width: 50px;
  height: 50px;
  padding: 18px;
  background-color: black;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  right: 20px;
  :hover {
    opacity: 0.4;
  }
`;
const LeftArrowIcon = () => <Icons.LeftArrow src={leftarrow} alt=" Icon" />;
const RightArrowIcon = () => <Icons.RightArrow src={rightarrow} alt=" Icon" />;

const Img = styled.img`
  width: 100%;
`;

const Blur = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 32px;
`;

Content.Title = styled.h1`
  color: inherit;
  font-size: 44px;
  font-family: "Montserrat";
  font-weight: 700;
`;
Content.Description = styled.h4`
  color: inherit;
  font-size: 16px;
  font-weight: 400;
  font-family: "Montserrat";
`;
Content.Price = styled.h2`
  color: inherit;
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 28px;
`;
export { Container, LeftArrowIcon, RightArrowIcon, Img, Blur, Content };
