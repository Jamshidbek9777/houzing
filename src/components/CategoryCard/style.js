import React from "react";
import styled from "styled-components";
import bath from "../../assets/icons/bath.svg";
import car from "../../assets/icons/car.svg";
import ruler from "../../assets/icons/ruler.svg";
import bed from "../../assets/icons/bed.svg";
// import love from "../../assets/icons/love.svg";
// import resize from "../../assets/icons/resize.svg";

const Container = styled.div`
  width: 100%;
  max-width: 280px;
  min-width: 230px;
  max-height: 380px;
  min-height: 350px;
  border-radius: 3px;
  border: 1px solid #e6e9ec;
  background: #fff;
  filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
  border-radius: 10px;
`;
const Img = styled.img`
  width: 100%;
  max-height: 220px;
  min-height: 220px;
  border-radius: 10px 10px 0px 0px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: ${({ footer }) => (footer ? "row" : "column")};
  justify-content: ${({ footer }) =>
    footer ? "space-between" : "space-around"};

  padding: 16px 20px;
  padding-top: 24px;
`;
const Blur = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
`;
const Icons = styled.div``;
Icons.Bed = styled.img`
  width: 19px;
  height: 19px;
`;
Icons.Bath = styled.img`
  width: 19px;
  height: 19px;
`;
Icons.Car = styled.img`
  width: 19px;
  height: 19px;
`;

const BedIcon = () => <Icons.Bed src={bed} alt="" />;
const BathIcon = () => <Icons.Bath src={bath} alt="" />;
const CarIcon = () => <Icons.Car src={car} alt="" />;
const RulerIcon = () => <Icons.Ruler src={ruler} alt="" />;
// const ResizeIcon = () => <Icons.Resize src={resize} alt="" />;
// const LoveIcon = () => <Icons.Love src={love} alt="" />;

export { Container, Content, Img, BedIcon, BathIcon, CarIcon, RulerIcon, Blur };
