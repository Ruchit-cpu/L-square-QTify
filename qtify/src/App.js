import React from "react";
import { StyledEngineProvider } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import Homepage from "./components/Homepage/Homepage";

function App() {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <Navbar />
        <HeroSection />
        <Homepage />
      </StyledEngineProvider>
    </>
  );
}

export default App;
