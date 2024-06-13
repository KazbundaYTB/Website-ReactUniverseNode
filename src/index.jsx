// index.jsx
import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import App from "./App";
import Minecraft from "./components/Minecraft"; // Import Minecraft komponenty
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    
  },
  {
    path: "/minecraft", // Přidáme routu pro Minecraft
    element: <Minecraft />,
  },
]);


createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
