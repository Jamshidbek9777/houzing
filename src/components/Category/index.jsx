import React, { useEffect, useState } from "react";
import { Container } from "./style";
import CategoryCard from "../CategoryCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
const { REACT_APP_BASE_URL: url } = process.env;
const Category = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${url}/categories/list`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.data || []);
      });
  }, []);
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "20px",
    slidesToShow: 4,
    speed: 500,
    arrows: true,
    adaptiveHeight: true,
    dots: true,
    appendDots: (dots) => <h1>{dots}</h1>,
  };
  console.log(data);
  return (
    <Container>
      <Slider {...settings}>
        {data.map((value) => {
          return (
            <CategoryCard
              onClick={() => {
                return navigate(`/properties?category_id=${value.id}`);
              }}
              data={value}
            />
          );
        })}
      </Slider>
    </Container>
  );
};
export default Category;
