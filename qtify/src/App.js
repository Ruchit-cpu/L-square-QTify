import React from "react";
import { StyledEngineProvider } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";

function App() {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <Navbar />
        <HeroSection />
      </StyledEngineProvider>
    </>
  );
}

export default App;
