import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import styled from "styled-components";
import Mac from "./Mac";
import { AmbientLight } from "three";

const WebDesign = () => {
  return (
    <Canvas camera={{fov:120 }}>
    
        <ambientLight intensity="1" />
        <directionalLight position={[3, 2, 1]} />
        <Mac />

        <OrbitControls enableZoom={false} autoRotate />
     
    </Canvas>
  );
};

export default WebDesign;
