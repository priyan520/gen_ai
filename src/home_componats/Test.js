import React from "react";
import Particles from "react-particles";
import { loadFireflyPreset } from "tsparticles-preset-firefly";

const Test = () => {
  // Define the init function
  const customInit = async (engine) => {
    await loadFireflyPreset(engine);
  };

  const options = {
    preset: "firefly",
  };

  return <Particles options={options} init={customInit} className="h-full w-full absolute top-0 left-0" />;
};

export default Test;
