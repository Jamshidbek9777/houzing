import React from "react";
import styled from "styled-components";
import bath from "../../assets/icons/bath.svg";
import car from "../../assets/icons/car.svg";
import ruler from "../../assets/icons/ruler.svg";
import bed from "../../assets/icons/bed.svg";
import love from "../../assets/icons/love.svg";
import resize from "../../assets/icons/resize.svg";

const Container = styled.div`
  width: 380px;
  height: 440px;
  flex-shrink: 0;
  border-radius: 3px;
  border: 1px solid #e6e9ec;
  background: #fff;
  filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
  border: 1px solid black;
`;
const Img = styled.img`
  width: 100%;
  max-height: 220px;
  min-height: 220px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: ${({ footer }) => (footer ? "row" : "column")};
  justify-content: ${({ footer }) =>
    footer ? "space-between" : "space-around"};

  padding: 16px 20px;
  padding-top: 24px;
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  /* padding: 16px 0; */
`;
Details.Item = styled.div`
  display: flex;
  flex-direction: ${({ row }) => (row ? "row" : "column ")};
  /* flex-direction: column; */
  align-items: center;
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
Icons.Ruler = styled.img`
  width: 19px;
  height: 19px;
`;
Icons.Resize = styled.img``;
Icons.Love = styled.img`
  width: 27px;
  height: 27px;
  padding: 6px;
  background-color: #f6f8f9;
  border-radius: 40%;
  margin-left: 20px;
`;

const BedIcon = () => <Icons.Bed src={bed} alt="" />;
const BathIcon = () => <Icons.Bath src={bath} alt="" />;
const CarIcon = () => <Icons.Car src={car} alt="" />;
const RulerIcon = () => <Icons.Ruler src={ruler} alt="" />;
const ResizeIcon = () => <Icons.Resize src={resize} alt="" />;
const LoveIcon = () => <Icons.Love src={love} alt="" />;

const Divider = styled.div`
  background: var(--border-color, #e6e9ec);
  height: 1px;
  width: 100%;
`;
export {
  Container,
  Content,
  Img,
  Details,
  BedIcon,
  BathIcon,
  CarIcon,
  RulerIcon,
  Divider,
  ResizeIcon,
  LoveIcon,
};
