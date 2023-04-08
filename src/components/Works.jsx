import React from "react";
import styled from "styled-components";

const data = [
  "Web Design",
  "Development",
  "Illustration",
  "Product Design",
  "Social Media"
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  width: 1400px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 15px;
  margin: 0 auto;
`;
const Left = styled.div`
  position: relative;
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 15px;
  color: white;
`;
const List = styled.ul`
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

const Works = () => {
  return (
    <Section id="works">
      <Container>
        <Left>
          <List>
            {data.map((listItem) => (
              <ListItem listItem={listItem} key={listItem}>
                {listItem}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>{/* 3d model */}</Right>
      </Container>
    </Section>
  );
};

export default Works;
