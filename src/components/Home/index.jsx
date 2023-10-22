import React from "react";
import { Container } from "./style";
import Carousel from "../Carousel/index";
import Recommended from "../Recommended";
import Category from "../Category";
import Why from "../Why";
const Home = () => {
  return (
    <Container>
      <Carousel />
      <Recommended />
      <Why />
      <Category />
    </Container>
  );
};
export default Home;
