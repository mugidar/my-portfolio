import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cube from "./Cube";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  margin: 0 15px;
  margin: 0 auto;
  width: 1400px;
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: space-between;
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
const Title = styled.h1`
  font-size: 72px;
`;
const Subtitle = styled.sub`
  color: pink;
  font-size: 18px;
`;
const Line = styled.div`
  width: 10px;
  height: 2px;
  background-color: gray;
`;
const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
const Desc = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: pink;
  border: 0;
  padding: 10px 15px;
  border-radius: 8px;
`;

const Who = () => {
  return (
    <Section id="who">
      <Container>
        <Left>
        <Canvas camera={{ position: [5, 5, 5], fov: 15 }}>
            <OrbitControls autoRotate={true} enableZoom={false} />
            <ambientLight intensity="1" />
            <directionalLight position={[3, 2, 1]} />
            <Cube />
          </Canvas>
        </Left>
        <Right>
          <Title>Think outside the square space</Title>
          <WhatWeDo>
            <Line></Line>
            <Subtitle>Who am I</Subtitle>
          </WhatWeDo>
          <Desc>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos,
            cumque.
          </Desc>
          <Button>See my works</Button>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
