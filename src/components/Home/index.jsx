import React from "react";
import { Container } from "./style";
import Carousel from "../Carousel/index";
import Recommended from "../Recommended";
import Category from "../Category";
import Why from "../Why";
import Recent from "../Recent";
import Banner from "../Banner";
const Home = () => {
  return (
    <Container>
      <Carousel />
      <Recommended />
      <Why />
      <Category />
      <Banner />
      <Recent />
    </Container>
  );
};
export default Home;
