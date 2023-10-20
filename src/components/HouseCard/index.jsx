import React from "react";
import {
  Container,
  Content,
  Details,
  BedIcon,
  BathIcon,
  CarIcon,
  RulerIcon,
  Divider,
  ResizeIcon,
  LoveIcon,
} from "./style";
import { Img } from "./style";
import noimg from "../../assets/imgs/noimg.png";

const HouseCard = ({ url,  }) => {
  return (
    <Container>
      <Img src={ url || noimg} />
      <Content>
        <div className="subTitle, inline">
        new apaparmedede
        </div>
        <div className="info">  Quincy St, Brooklyn, NY, USA</div>
        <Details>
          <Details.Item>
            <BedIcon />
            <div className="info">  Beds</div>
          </Details.Item>
          <Details.Item>
            <BathIcon />
            <div className="info"> Baths</div>
          </Details.Item>
          <Details.Item>
            <CarIcon />
            <div className="info">Garage</div>
          </Details.Item>
          <Details.Item>
            <RulerIcon />
            <div className="info"> Sq Ft</div>
          </Details.Item>
        </Details>
      </Content>
      <Divider />
      <Content footer>
        <Details.Item footer>
          <div className="info">$12121/mo</div>
          <div className="subTitle">$212/mo</div>
        </Details.Item>
        <Details.Item row>
          <ResizeIcon />
          <LoveIcon />
        </Details.Item>
      </Content>
    </Container>
  );
};
export default HouseCard;
