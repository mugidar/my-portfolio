import React from "react";
import styled from "styled-components";
const Section = styled.div`
  display: flex;
  justify-content: center;
`;
const Container = styled.header`
  padding: 0 15px;
  margin: 0 15px;
  width: 1400px;
  display: flex;
  justify-content: space-between;
  background-color: white;
  align-items: center;
`;

const Links = styled.div`
  display: flex;
  align-items: center;

  gap: 40px;
`;

const Logo = styled.img`
  height: 40px;
  width: auto;
`;

const List = styled.ul`
  display: flex;
  list-style: none;
  gap: 15px;
`;

const ListItem = styled.li``;

const Link = styled.a`
  color: black;
  cursor: pointer;
  text-decoration: none;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
const Icon = styled.img`
  width: auto;
  height: 40px;
`;

const Button = styled.button`
  background-color: #b75757;
  padding: 5px 10px;
  border: 0;
  border-radius: 10px;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/logo.png" />
          <List>
            <ListItem>
              <Link href="#home">Home</Link>
            </ListItem>
            <ListItem>
              <Link href="#who">Who</Link>
            </ListItem>
            <ListItem>
              <Link href="#works">Works</Link>
            </ListItem>
            <ListItem>
              <Link href="#contact">Contact</Link>
            </ListItem>
          </List>
        </Links>

        <Icons>
          <Icon src="./img/hire.png" />
          <Button>Hire me</Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
