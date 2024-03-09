import React from "react";
import { StyledEngineProvider } from "@mui/material";
import Homepage from "./components/Homepage/Homepage";
import AlbumDetailsPage from "./components/AlbumDetailsPage/AlbumDetailsPage";
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/:slug",
    element: <AlbumDetailsPage />,
  },
]);
function App() {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <RouterProvider router={router} />
      </StyledEngineProvider>
    </>
  );
}

export default App;
