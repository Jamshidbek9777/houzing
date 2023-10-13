import React from "react";
import { Container, Wrapper, Section, Logo, Link, Main } from "./style";
import { Outlet, useNavigate } from "react-router-dom";
import LogoImg from "../../assets/icons/logo.svg";
import { navbar } from "../../utils/navbar";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Main>

      <Wrapper>
        <Section onClick={() => navigate("/home")} logo>
          <Logo src={LogoImg} />
        </Section>
        <Section>
          {navbar.map(({ title, path },index) => {
            return (
              <Link
              className={({ isActive }) => isActive && "active"}
              key={index}
              to={path}
              >
                {title}
              </Link>
            );
          })}
        </Section>
        <Section>
          <button>Sign in</button>
        </Section>
      </Wrapper>
          </Main>
      <Outlet />
    </Container>
  );
};
export default Home;
