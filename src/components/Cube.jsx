import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Text, RenderTexture } from "@react-three/drei";
import { PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Cube = () => {
  const textRef = useRef();
  
    useFrame(
      (state) =>
        (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2)
    );
  
  return (
    <mesh>
      <boxGeometry   />
      <meshStandardMaterial>
        <RenderTexture attach="map">
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <color attach="background" args={["pink"]} />
          <Text ref={textRef} fontSize={3} color="#ac1212">
            Hello
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};

export default Cube;
