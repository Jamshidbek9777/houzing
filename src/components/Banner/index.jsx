import React from "react";
import {
  Container,
  Blur,
  Content,
} from "./style";
import {Button} from "../Generics"
import { Img } from "./style";
import RecenPic from "../../assets/imgs/repic.png";


const Banner = () => {
 

  return (
    <Container>
      <Img src={RecenPic} />
      <Blur />
      <Content>
        <Content.Title>
          Vermont Farmhouse With Antique Jail Is the Week's Most Popular Home
        </Content.Title>
        <Button>Read More</Button>
      </Content>
    </Container>
  );
};
export default Banner;
