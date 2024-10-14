import React from "react";
import Particles from "react-particles";
import { loadFireflyPreset } from "tsparticles-preset-firefly";

const Test = () => {
  const customInit = async (engine) => {
    await loadFireflyPreset(engine);
  };

  const options = {
    preset: "firefly",
    particles: {
      size: {
        value: 1,
         
      },
    },
  };

  return (
    <Particles 
      options={options} 
      init={customInit} 
      className="w-[100px] h-[100px] max-h-[189px] absolute top-0 left-0" 
    />
  );
};

export default Test;
