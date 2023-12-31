import React from "react";
import styled from "styled-components";
import bath from "../../assets/icons/bath.svg";
import car from "../../assets/icons/car.svg";
import ruler from "../../assets/icons/ruler.svg";
import bed from "../../assets/icons/bed.svg";

const Container = styled.div`
  width: 100%;
  max-width: 280px;
  min-width: 230px;
  max-height: 380px;
  min-height: 350px;
  border-radius: 3px;
  filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
  border-radius: 10px;
`;
const Img = styled.img`
  width: 100%;
  border-radius: 3px;
  height: 100%;
  /* max-height: 220px;
  min-height: 220px; */
`;
const Content = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  color: #fff;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
`;
const Blur = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.7);
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

export { Container, Content, Img, BedIcon, BathIcon, CarIcon, RulerIcon, Blur };
