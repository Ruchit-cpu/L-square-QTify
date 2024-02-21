import React from "react";
import { StyledEngineProvider } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <Navbar />
      </StyledEngineProvider>
    </>
  );
}

export default App;
