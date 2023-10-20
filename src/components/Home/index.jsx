import React from "react";
import { Container } from "./style";
import Carousel from "../Carousel";
import HouseCard from "../HouseCard";
const Home = () => {
  return (
    <Container>
      <Carousel />
      <HouseCard />
    </Container>
  );
};
export default Home;
 