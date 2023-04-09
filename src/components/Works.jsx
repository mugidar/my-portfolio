import React, { useState } from "react";
import styled from "styled-components";
import WebDesign from "./WebDesign";
import Development from "./Development";
import Social from "./Social";

const data = ["Web Design", "Development", "Social Media"];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  color: black;
  font-size: 14px;
  font-weight: 300;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    justify-content: center;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;


const ListItem = styled.li`
  cursor: pointer;
  -webkit-text-stroke: 1px white;
  color: transparent;
  list-style: none;
  font-weight: 900;
  font-size: 72px;
  transition: 0.4s;
  position: relative;
  transition: all 0.2s;
  &::after {
    transition: all 0.2s;
    top: 2px;
    left: 2px;
    position: absolute;
    content: "${(props) => props.listItem}";
    color: none;
    -webkit-text-stroke: 1px transparent;
    overflow: hidden;
    width: 0px;
    white-space: nowrap;
  }

  &:hover {
    transition: all 0.2s;
    :after {
      animation: move 1s both;

      @keyframes move {
        to {
          width: 100%;
          -webkit-text-stroke: 1px white;
          color: #7b0e7b;
        }
      }
    }
  }
`;

const Right = styled.div`
  display: flex;
  
  flex: 1;
`;
const Works = () => {
  const [work, setWork] = useState("Web Design");

  const renderChosenWork = () => {
    switch (work) {
      case "Web Design":
        return <WebDesign />;
      case "Development":
        return <Development />;
      case "Social Media":
        return <Social />;

      default:
        return <WebDesign />;
    }
  };

  return (
    <Section id="works">
      <Container>
        <Left>
          <List>
            {data.map((listItem) => (
              <ListItem
                onClick={() => setWork(listItem)}
                listItem={listItem}
                key={listItem}
              >
                {listItem}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>{renderChosenWork()}</Right>
      </Container>
    </Section>
  );
};

export default Works;
