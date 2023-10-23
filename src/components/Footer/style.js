import React from "react";
import styled from "styled-components";
import pin from "../../assets/icons/pin.svg";
import phone from "../../assets/icons/phone.svg";
import email from "../../assets/icons/email.svg";
const Container = styled.div`
  position: relative;
  display: flex;
  margin: auto;
  justify-content: space-around;
  width: 100%;
  background: var(--text-1, #0d263b);
  padding: 48px 0;
  height: 417px;
  margin-top: 96px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 235px;
  width: 100%;
`;
Content.Title = styled.div`
  color: var(--color-5, #fff);
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 32px;
`;
Content.Item = styled.div`
  color: var(--color-5, #fff);
  font-family: "Montserrat";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  margin-bottom: 20px;
  line-height: 20px;
`;
const Icons = styled.div``;
Icons.Pin = styled.img`
margin-right: 21px;
`;
Icons.Phone = styled.img`
  margin-right: 21px;
`;
Icons.Email = styled.img`
  margin-right: 21px;
`;

const PinIcon = () => <Icons.Pin src={pin} alt=" Icon" />;
const PhoneIcon = () => <Icons.Phone src={phone} alt=" Icon" />;
const EmailIcon = () => <Icons.Email src={email} alt=" Icon" />;
export { Container, Content, PinIcon, PhoneIcon, EmailIcon };

