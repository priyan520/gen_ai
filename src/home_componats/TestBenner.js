import React from "react";
import Particles from "react-particles";
import { loadFireflyPreset } from "tsparticles-preset-firefly";

const TestBenner = () => {
  const customInit = async (engine) => {
    await loadFireflyPreset(engine);
  };

  const options = {
    preset: "firefly",
    particles: {
      size: {
        value: 1, 
      },
      color: {
        value: "#fff", // Change this to any color you like (e.g., red in this case)
      },
    },
  };

  return (
    <Particles 
      options={options} 
      init={customInit} 
      className="w-full  h-full absolute z-50  top-0 left-0 " 
    />
  );
};

export default TestBenner;
