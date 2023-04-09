import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cube from "./Cube";
import styled from "styled-components";
import { Text, RenderTexture,PerspectiveCamera } from "@react-three/drei";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  scroll-snap-align: center;
`;

const Test = () => {
  
  return (
    <Container>
      <Canvas>
        <OrbitControls autoRotate={true} enableZoom={false} />
        <ambientLight intensity="1" />
        <directionalLight position={[3, 2, 1]} />
       <Cube/>
       
      </Canvas>
    </Container>
  );
};

export default Test;
