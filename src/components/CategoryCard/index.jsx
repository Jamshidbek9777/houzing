import React from "react";
import { Container, Content, Blur } from "./style";
import { Img } from "./style";
import noimg from "../../assets/imgs/noimg.png";
// import Category1 from "../../assets/imgs/category1.png"
import Category2 from "../../assets/imgs/category2.jpeg";

const CategoryCard = ({ onClick, data = {} }) => {
  const { name } = data;
  return (
    <Container onClick={onClick}>
      <Img src={Category2 || noimg} />
      <Blur />
      <Content>{name || "Category"}</Content>
    </Container>
  );
};
export default CategoryCard;
