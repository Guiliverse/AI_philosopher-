import React from "react";
import { useRef } from "react";
import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";
import GradientBackground from "./GradientBackground";
import Statue from "./Statue";

export default function Scene(props) {
  const randomLight = useRef();
  return (
    <>
      <AccumulativeShadows
        frames={100}
        color="purple"
        colorBlend={0.5}
        opacity={1}
        scale={10}
        alphaTest={0.85}
      >
        <group ref={randomLight}>
          <RandomizedLight
            amount={8}
            radius={3}
            ambient={0.5}
            position={[0, 6, -7]}
            bias={0.001}
          />
        </group>
      </AccumulativeShadows>
      <group scale={20}>
        <GradientBackground
          firstClick={props.firstClick}
          colorOne={props.colorOne}
          colorTwo={props.colorTwo}
          colorThree={props.colorThree}
          colorFour={props.colorFour}
          colorFive={props.colorFive}
        />
      </group>
      <group>
        <Statue />
      </group>
    </>
  );
}
