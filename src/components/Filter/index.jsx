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
import uzeReplace from "../../hooks/useReplace";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useSearch from "../../hooks/useSearch";

const Filter = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = useSearch();
  const countryRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const zipCodeRef = useRef();
  const roomsRef = useRef();
  const sizeRef = useRef();
  const sortRef = useRef();
  const minRef = useRef();
  const maxRef = useRef();
  console.log(location);
  console.log(query.get("city "), "params");
  const onChange = ({ target: { value, name, placeholder } }) => {
    console.log(value, name, placeholder);
    navigate(`${location.pathname}${uzeReplace(name, value)}`);
  };
  const menu = (
    <MenuWrapper>
      <h1 className="subTitle">Address</h1>
      <Section>
        <Input
          defaultValue={query.get("country")}
          onChange={onChange}
          ref={countryRef}
          name={"country"}
          placeholder={"Country"}
        />
        <Input
          onChange={onChange}
          defaultValue={query.get("region")}
          ref={regionRef}
          name={"region"}
          placeholder={"Region"}
        />
        <Input
          onChange={onChange}
          ref={cityRef}
          defaultValue={query.get("city")}
          name={"city"}
          placeholder={"City"}
        />
        <Input
          onChange={onChange}
          defaultValue={query.get("zip_code")}
          ref={zipCodeRef}
          name={"zip_code"}
          placeholder={"Zip code"}
        />
      </Section>
      <h1 className="subTitle">Apartment info</h1>
      <Section>
        <Input
          defaultValue={query.get("rooms")}
          onChange={onChange}
          ref={roomsRef}
          name={"rooms"}
          placeholder={"Rooms"}
        />
        <Input
          onChange={onChange}
          defaultValue={query.get("size")}
          ref={sizeRef}
          name={"size"}
          placeholder={"Size"}
        />
        <Input
          onChange={onChange}
          defaultValue={query.get("sort")}
          ref={sortRef}
          name={"sort"}
          placeholder={"Sort"}
        />
      </Section>
      <h1 className="subTitle">Price</h1>
      <Section>
        <Input
          onChange={onChange}
          defaultValue={query.get("min_price")}
          ref={minRef}
          name={"min_price"}
          placeholder={"Min price"}
        />
        <Input
          onChange={onChange}
          defaultValue={query.get("max_price")}
          ref={maxRef}
          name={"max_price"}
          placeholder={"Max price"}
        />
      </Section>
      <Section>
        <Button type={"light"}>Cancel</Button>
        <Button type={"primary"}>Submit</Button>
      </Section>
    </MenuWrapper>
  );
  console.log(uzeReplace("address", "TUIT"));
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
