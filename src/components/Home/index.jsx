import React from "react";
import { Container } from "./style";
import Carousel from "../Carousel/index";
import Housecard from "../HouseCard";
import CategoryCard from "../CategoryCard";
const Home = () => {
  return (
    <Container>
      <Carousel />
      <Housecard />
      <CategoryCard />
    </Container>
  );
};
export default Home;
