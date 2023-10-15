import React, {useRef} from "react";
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
const Filter = () => {
 const countryRef = useRef()
 const regionRef = useRef()
 const cityRef = useRef()
 const zipCodeRef = useRef()
 const roomsRef = useRef()
 const sizeRef = useRef()
 const sortRef = useRef()
 const minRef = useRef()
 const maxRef = useRef()
  const menu = (
    <MenuWrapper>
      <h1 className="subTitle">Address</h1>
      <Section>
        <Input ref={countryRef} placeholder={"Country"} />
        <Input ref={regionRef}placeholder={"Region"} />
        <Input ref={cityRef}placeholder={"City"} />
        <Input ref={zipCodeRef}placeholder={"Zip code"} />
      </Section>
      <h1 className="subTitle">Apartment info</h1>
      <Section>
        <Input  ref={roomsRef} placeholder={"Rooms"} />
        <Input  ref={sizeRef} placeholder={"Size"} />
        <Input  ref={sortRef} placeholder={"Sort"} />
      </Section>
      <h1 className="subTitle">Price</h1>
      <Section>
        <Input  ref={minRef} placeholder={"Min price"} />
        <Input  ref={maxRef} placeholder={"Max price"} />
      </Section>
      <Section>
        <Button type={'light'}>Cancel</Button>
        <Button type={'primary'}>Submit</Button>
      </Section>
    </MenuWrapper>
  );
  return (
    <Container>
      <Input
        icon={<FilterIcon />}
        placeholder={"Enter an address, neighborhood, city, or ZIP code"}
      />
      <Dropdown overlay={menu} placement="bottomRight">
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
