import { useState } from "react";
import Popup from "./components/Popup";
import Register from "./components/Register";
import { PopupProps } from "./components/Popup";
import Login from "./components/Login";
import Background from "./components/Background";
import { SearchBar } from "./components/SearchBar";
function App() {
  const [register, setRegister] = useState(false);
  const [login, setLogin] = useState(false);
  let registerPopup: PopupProps = {
    open: register,
    close: setRegister,
    children: <Register />,
  };
  let loginPopup: PopupProps = {
    open: login,
    close: setLogin,
    children: <Login />,
  };
  return (
    <>
      <SearchBar />
      <button onClick={() => setRegister(true)}>Register</button>
      <Popup {...registerPopup} />
      <button onClick={() => setLogin(true)}>Login</button>
      <Popup {...loginPopup} />
      <div
        className="h-screen w-screen animate-gradient absolute top-0 z-0"
        id="grad"
      ></div>
    </>
  );
}

export default App;
