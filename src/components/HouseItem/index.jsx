import React, { useEffect, useState } from "react";
import { Container } from "./style";
import { useParams } from "react-router-dom";
import useRequest from "../../hooks/useRequest";
const { REACT_APP_BASE_URL: url } = process.env;
const HouseItem = () => {
  const params = useParams();
  const [data, setData] = useState({});
  const request = useRequest();

  useEffect(() => {
    // request(`${url}/houses/list${params.id}`).then((res) => {
    //   setData(res.data || []);
    // });
    fetch(`https://houzing-app-pr57.onrender.com/api/v1/houses/${params.id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => res.json());
  }, [params.id]);
  return (
    <Container>
      <h1>HouseItem</h1>
    </Container>
  );
};
export default HouseItem;
