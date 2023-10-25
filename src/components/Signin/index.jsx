import React, { useState } from "react";
import { Container, Content } from "./style";
import { Input } from "../Generics";
import useRequest from "../../hooks/useRequest";
import { Button } from "../Generics";
import { useNavigate } from "react-router-dom";
// import { message } from "antd";
const Singin = () => {
  const navigate = useNavigate();
  const request = useRequest();
  const [body, setBody] = useState({});

  const onChange = ({ target: { value, placeholder } }) => {
    setBody({
      ...body,
      [placeholder]: value,
    });
  };
  // const info = () => {
  //   message.info("Succesfully logged in");
  // };
  // const warning = () => {
  //   message.warning("Incorrect  email or password");
  // };
  const onSubmit = () => {
    request({ url: `/public/auth/login`, method: "POST", body });
    //   fetch("https://houzing-app-pr57.onrender.com/api/public/auth/login", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(body),
    //   })
    //     .then((res) => res.json())
    //     .then((res) => {
    //       if (res.authenticationToken) {
    //         navigate(`/home`);
    //         localStorage.setItem("token", res.authenticationToken);
    //         info();
    //       } else {
    //         warning();
    //       }
    //     });
    //   console.log(body);
  };
  return (
    <Container>
      <Content>
        <div className="subTitle">SIgn In</div>
        <Input onChange={onChange} placeholder="email" type="email" />
        <Input onChange={onChange} placeholder="password" type="password" />
        <Button onClick={onSubmit} width={"%"}>
          Login
        </Button>
      </Content>
    </Container>
  );
};
export default Singin;
