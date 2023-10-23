import styled from "styled-components";
const Container = styled.div`
  height: fit-content;
  position: relative;
`;

const Img = styled.img`
  width: 100%;
  height: 571px;
`;

const Blur = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
`;
const Content = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  color: white;
  `;

Content.Title = styled.h1`
  color: inherit;
  font-size: 28px;
  max-width: 576px;
  width: 100%;
  font-family: "Montserrat";
  font-weight: 700;
  margin-bottom: 48px;
`;

export { Container,  Img, Blur, Content };
