import React from "react";
import { Container, Wrapper, Section, Logo, Link, Main } from "./style";
import { Outlet, useNavigate } from "react-router-dom";
import LogoImg from "../../assets/icons/logo.svg";
import { navbar } from "../../utils/navbar";
import Button from "../Generics/Button";
import Filter from "../Filter";
import Footer from "../Footer";

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
            {navbar.map(({ title, path, hidden }, index) => {
              return (
                !hidden && (
                  <Link
                    className={({ isActive }) => isActive && "active"}
                    key={index}
                    to={path}
                  >
                    {title}
                  </Link>
                )
              );
            })}
          </Section>
          <Section>
            <Button onClick={() => navigate("/signin")} type={"dark"}>
              Sign In
            </Button>
          </Section>
        </Wrapper>
      </Main>
      <Filter />
      <Outlet />
      <Footer />
    </Container>
  );
};
export default Home;
