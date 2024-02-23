import React from "react";
import { StyledEngineProvider } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import Section from "./components/Section/Section";

function App() {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <Navbar />
        <HeroSection />
        <Section />
      </StyledEngineProvider>
    </>
  );
}

export default App;
