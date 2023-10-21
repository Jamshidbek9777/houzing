import React from "react";
import {  Container, Content, Blur } from "./style";
import { Img } from "./style";
import noimg from "../../assets/imgs/noimg.png";

const CategoryCard = ({ data = {} }) => {
  const {
    address,
    city,
    country,
    description,
    attachments,
    category,
  } = data || {};
  return (
    <Container>
      <Img src={(attachments && attachments[0].imgPath) || noimg} />
      <Blur/>
      <Content>
        <div className="subTitle ,inline">
          {city} , {country}, {description} -{" "}
          {(category && category.name) || "Category"}
        </div>
        <div className="info"> {address}</div>
      </Content>
    </Container>
  );
};
export default CategoryCard;
