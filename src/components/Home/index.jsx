import React from "react";
import { Container } from "./style";
import Carousel from "../Carousel/index";
import Recommended from "../Recommended";
import Category from "../Category";
const Home = () => {
  return (
    <Container>
      <Carousel />
      <Recommended />
      <Category />
    </Container>
  );
};
export default Home;
