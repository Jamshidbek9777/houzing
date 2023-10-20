import React from "react";
import {
  Container,
  LeftArrowIcon,
  RightArrowIcon,
  Blur,
  Content,
} from "./style";
import { Carousel } from "antd";
import { Img } from "./style";
import House1 from "../../assets/imgs/house1.png";
import House2 from "../../assets/imgs/house2.png";

const GenCarousel = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <Container>
      <Carousel afterChange={onChange}>
        <Img src={House1} />
        <Img src={House2} />
        <Img src={House1} />
        <Img src={House2} />
      </Carousel>
      <Blur />
      <Content>
        <Content.Title> Skyper Pool Partment</Content.Title>
        <Content.Description>
          112 Glenwood Ave Hyde Park, Boston, MA{" "}
        </Content.Description>
        <Content.Price>$5,250/month</Content.Price>
      </Content>
      <LeftArrowIcon />
      <RightArrowIcon />
    </Container>
  );
};
export default GenCarousel;
