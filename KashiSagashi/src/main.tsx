import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faMagnifyingGlass,
  faGear,
  faCheck,
  faPlus,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  fab,
  faMagnifyingGlass,
  faGear,
  faCheck,
  faPlus,
  faRightFromBracket
);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
