import React from "react";
import { Container } from "./style";
import Carousel from "../Carousel/index";
import Housecard from "../HouseCard";
const Home = () => {
  return (
    <Container>
      <Carousel />
      <Housecard /> 
    </Container>
  );
};
export default Home;
