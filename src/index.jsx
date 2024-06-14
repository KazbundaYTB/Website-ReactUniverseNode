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
import Faq from "./components/Faq";

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
    element: <Faq />,
  },
]);


createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
