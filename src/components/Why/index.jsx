import React from "react";
import {
  CalculatorIcon,
  Container,
  Content,
  DiscordIcon,
  HomeIcon,
  MapIcon,
  Wrapper, 
} from "./style";
const Why = () => {
  return (
    <Container>
      <Content>
        <h1 className="title">Why Choose Us</h1>
        <h1 className="info">
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </h1>
      </Content>
      <Wrapper>
        <Content>
          <DiscordIcon />
          <div className="subTitle">Trusted By Thousands</div>
          <div className="info">
            With over 1 million+ homes for sale available on the website, Trulia
            can match you with a house you will want to call home.
          </div>
        </Content>
        <Content>
          <HomeIcon />
          <div className="subTitle">Wide Renge Of Properties</div>
          <div className="info">
            With over 1 million+ homes for sale available on the website, Trulia
            can match you with a house you will want to call home.
          </div>
        </Content>
        <Content>
          <CalculatorIcon />
          <div className="subTitle">Financing Made Easy</div>
          <div className="info">
            With over 1 million+ homes for sale available on the website, Trulia
            can match you with a house you will want to call home.
          </div>
        </Content>
        <Content>
          <MapIcon />
          <div className="subTitle">See Neighborhoods</div>
          <div className="info">
            With over 1 million+ homes for sale available on the website, Trulia
            can match you with a house you will want to call home.
          </div> 
        </Content>
      </Wrapper>
    </Container>
  );
};
export default Why;
