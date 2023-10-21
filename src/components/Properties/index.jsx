import React, { useEffect } from "react";
import { Container } from "./style";
import HouseCard from "../HouseCard";
import { useState } from "react";
import { useLocation } from "react-router-dom";
const { REACT_APP_BASE_URL: url } = process.env;
export const Properties = () => {
  const [data, setData] = useState([]);
  const {search} = useLocation()
  console.log(url);
  useEffect(() => {
    fetch(`${url}/houses/list${search}`)
      .then((res) => res.json())
      .then((res) => {
        // console.log(res.data);
        setData(res.data || []);
      });
  }, [search]);
  return (
    <Container>
      {data.map((value) => {
        // console.log(value);
        return <HouseCard data={value} key={value.id} />;
      })}
    </Container>
  );
};
export default Properties;
