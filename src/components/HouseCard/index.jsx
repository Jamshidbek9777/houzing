import React from "react";
import {
  Container,
  Content,
  Details,
  BedIcon,
  BathIcon,
  CarIcon,
  RulerIcon,
  Divider,
  ResizeIcon,
  LoveIcon,
} from "./style";
import { Img } from "./style";
import noimg from "../../assets/imgs/noimg.png";

const Housecard = ({ data = {} }) => {
  const {
    address,
    city,
    country,
    description,
    houseDetails,
    salePrice,
    price,
    attachments,
    category,
  } = data || {};
  return (
    <Container>
      <Img src={(attachments && attachments[0].imgPath) || noimg} />
      <Content>
        <div className="subTitle ,inline">
          {city} , {country}, {description} -{" "}
          {(category && category.name) || "Category"}
        </div>
        <div className="info"> {address}</div>
        <Details>
          <Details.Item>
            <BedIcon />
            <div className="info">
              {" "}
              Beds {houseDetails && houseDetails.beds}
            </div>
          </Details.Item>
          <Details.Item>
            <BathIcon />
            <div className="info">
              {" "}
              Bath {houseDetails && houseDetails.bath}
            </div>
          </Details.Item>
          <Details.Item>
            <CarIcon />
            <div className="info">
              {" "}
              Garage {houseDetails && houseDetails.garage}
            </div>
          </Details.Item>
          <Details.Item>
            <RulerIcon />
            <div className="info">
              {" "}
              Sq Ft {houseDetails && houseDetails.area}
            </div>
          </Details.Item>
        </Details>
      </Content>
      <Divider />
      <Content footer>
        <Details.Item footer>
          <div className="info">${salePrice}/mo</div>
          <div className="subTitle">${price}/mo</div>
        </Details.Item>
        <Details.Item row>
          <ResizeIcon />
          <LoveIcon />
        </Details.Item>
      </Content>
    </Container>
  );
};
export default Housecard;
