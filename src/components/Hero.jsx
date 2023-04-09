import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, OrbitControls } from "@react-three/drei";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
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
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 15px;
  color: white;
`;
const Right = styled.div`
  position: relative;
  flex: 3;
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

const Img = styled.img`
  position: absolute;
  justify-self: flex-end;
  width: auto;
  height: 500px;
  object-fit: contain;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;

  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to {
      transform: translateY(30px);
    }
  }
`;

const Hero = () => {
  return (
    <Section id="hero">
      <Navbar />
      <Container>
        <Left>
          <Title>Misha Title</Title>
          <WhatWeDo>
            <Line></Line>
            <Subtitle>What I do</Subtitle>
          </WhatWeDo>
          <Desc>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos,
            cumque.
          </Desc>
          <Button>Learn more</Button>
        </Left>
        <Right>
          <Canvas>
            {/* <OrbitControls autoRotate={true} enableZoom={false} /> */}
            <ambientLight intensity="1" />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[2, 100, 200]} scale={1}>
              <MeshDistortMaterial
                color="#650da9"
                attach="material"
                distort={0.5}
                speed={1}
              />
            </Sphere>
          </Canvas>

        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
