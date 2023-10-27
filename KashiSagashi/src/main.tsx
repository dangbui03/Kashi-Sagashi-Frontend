import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGoogle, fab } from "@fortawesome/free-brands-svg-icons";
import {
  faMagnifyingGlass,
  faGear,
  faCheck,
  faPlus,
  faRightFromBracket,
  faCircleCheck,
  faLeftLong,
  faUpLong,
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
  faLeftLong,
  faGoogle,
  faUpLong
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
