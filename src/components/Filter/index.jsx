import React, { useRef } from "react";
import {
  Container,
  AdvancedIcon,
  SearchIcon,
  FilterIcon,
  MenuWrapper,
  Section,
} from "./style";
import { Input, Button } from "../Generics";
import { Dropdown } from "antd";
// import useReplace from "../../hooks/useReplace.jsx";
const Filter = () => {
  const countryRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const zipCodeRef = useRef();
  const roomsRef = useRef();
  const sizeRef = useRef();
  const sortRef = useRef();
  const minRef = useRef();
  const maxRef = useRef();

  const onChange = ({ target: { value, name, placeholder } }) => {
    console.log(value, name, placeholder);
  };
  const menu = (
    <MenuWrapper>
      <h1 className="subTitle">Address</h1>
      <Section>
        <Input
          onChange={onChange}
          ref={countryRef}
          name={"country"}
          placeholder={"Country"}
        />
        <Input
          onChange={onChange}
          ref={regionRef}
          name={"region"}
          placeholder={"Region"}
        />
        <Input
          onChange={onChange}
          ref={cityRef}
          name={"city"}
          placeholder={"City"}
        />
        <Input
          onChange={onChange}
          ref={zipCodeRef}
          name={"zip_code"}
          placeholder={"Zip code"}
        />
      </Section>
      <h1 className="subTitle">Apartment info</h1>
      <Section>
        <Input ref={roomsRef} name={"rooms"} placeholder={"Rooms"} />
        <Input ref={sizeRef} name={"size"} placeholder={"Size"} />
        <Input ref={sortRef} name={"sort"} placeholder={"Sort"} />
      </Section>
      <h1 className="subTitle">Price</h1>
      <Section>
        <Input ref={minRef} name={"min_price"} placeholder={"Min price"} />
        <Input ref={maxRef} name={"max_price"} placeholder={"Max price"} />
      </Section>
      <Section>
        <Button type={"light"}>Cancel</Button>
        <Button type={"primary"}>Submit</Button>
      </Section>
    </MenuWrapper>
  );
  // console.log(useReplace("address", "TUIT"));
  return (
    <Container>
      <Input
        icon={<FilterIcon />}
        placeholder={"Enter an address, neighborhood, city, or ZIP code"}
      />
      <Dropdown overlay={menu} placement="bottomRight" trigger="click">
        <div>
          <Button type={"light"}>
            <AdvancedIcon /> Advanced
          </Button>
        </div>
      </Dropdown>
      <Button>
        <SearchIcon /> Search
      </Button>
    </Container>
  );
};
export default Filter;
