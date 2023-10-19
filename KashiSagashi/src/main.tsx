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
  faCircleCheck,
  faLeftLong,
} from "@fortawesome/free-solid-svg-icons";
import { CookiesProvider } from "react-cookie";

library.add(
  fab,
  faMagnifyingGlass,
  faGear,
  faCheck,
  faPlus,
  faRightFromBracket,
  faCircleCheck,
  faLeftLong
);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CookiesProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </CookiesProvider>
    </BrowserRouter>
  </React.StrictMode>
);
