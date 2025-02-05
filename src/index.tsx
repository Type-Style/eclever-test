import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// ! Terrible workaround for deprecated mapbox lib
// ! See explanation here: https://github.com/alex3165/react-mapbox-gl/issues/822#issuecomment-1076315575
import * as mapboxgl from "mapbox-gl";
const accessToken =
  "pk.eyJ1IjoiZWNsZXZlciIsImEiOiJja3IzM3B3b24yMHNsMnBueGNya3I4eXExIn0.qNBd6dRRZLTTxKSJ0PUazg";
//@ts-ignore
Object.getOwnPropertyDescriptor(mapboxgl, "accessToken").set(accessToken);

const container = document.getElementById("root");
const root = createRoot(container!); // createRoot(container!) if you use TypeScript

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
