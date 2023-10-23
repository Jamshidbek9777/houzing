import React, { useEffect, useState } from "react";
import { Container } from "./style";
import { useParams } from "react-router-dom";
const { REACT_APP_BASE_URL: url } = process.env;
const HouseItem = () => {
  const params = useParams();
  console.log(params);
  const [data, setData] = useState([]);

  useEffect(() => {
    params.id &&
      fetch(`${url}/houses/list${params.id}`)
        .then((res) => res.json())
        .then((res) => {
          setData(res.data || []);
        });
  }, [params.id]);
  return (
    <Container>
      <h1>HouseItem</h1>
    </Container>
  );
};
export default HouseItem;
