// index.jsx
import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import App from "./App";
import Minecraft from "./components/Minecraft";
import WebHost from "./components/WebHost";
import Databaze from "./components/Databaze";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    
  },
  {
    path: "/minecraft",
    element: <Minecraft />,
  },
  {
    path: "/databaze",
    element: <Databaze />,
  },
  {
    path: "/webhost",
    element: <WebHost />,
  },
  {
    path: "/faq",
    element: <Minecraft />,
  },
]);


createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
