import React from "react";
import styled from "styled-components";
import discord from "../../assets/icons/discord.svg";
import home from "../../assets/icons/house1.svg";
import calculator from "../../assets/icons/calculator.svg";
import map from "../../assets/icons/map.svg";
const Container = styled.div`
  position: relative;
  padding: 96px 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 100%;
  background: #f5f7fc;
  padding: 48px 0;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 235px;
  width: 100%;
  /* text-align: center; */
`;
const Wrapper = styled.div`
  /* margin-top: 96px; */
  width: 100%;
  max-width: 1440px;
  padding: 0 130px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 40px;
`;
const Icons = styled.div``;
Icons.Discord = styled.img`
  margin-bottom: 24px;
`;
Icons.Home = styled.img`
  margin-bottom: 24px;
`;
Icons.Calculator = styled.img`
  margin-bottom: 24px;
`;
Icons.Map = styled.img`
  margin-bottom: 24px;
`;
const DiscordIcon = () => <Icons.Discord src={discord} alt=" Icon" />;
const HomeIcon = () => <Icons.Home src={home} alt=" Icon" />;
const CalculatorIcon = () => <Icons.Discord src={calculator} alt=" Icon" />;
const MapIcon = () => <Icons.Discord src={map} alt=" Icon" />;
export {
  Container,
  Content,
  Wrapper,
  DiscordIcon,
  HomeIcon,
  CalculatorIcon,
  MapIcon,
};
