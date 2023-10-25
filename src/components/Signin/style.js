import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 100%;
  align-items: center;
  background: #fff;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  max-width: 580px;
  width: 100%;
  border-radius: 3px;
  gap: 20px;
  border: 1px solid var(--border-color, #e6e9ec);
  background: var(--color-5, #fff);
  box-shadow: 0px 10px 30px 0px rgba(13, 38, 59, 0.05);
  padding: 30px;
  margin: 64px;
`;

export { Container, Content };
