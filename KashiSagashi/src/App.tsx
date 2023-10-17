import { useState } from "react";
import Popup from "./components/Popup";
import Register from "./components/Register";
import { PopupProps } from "./components/Popup";
import Login from "./components/Login";
import Background from "./components/Background";
import { SearchBar } from "./components/SearchBar";
import ForgetPw from "./components/ForgotPw";
import MailCode from "./components/MailCode";
import { Routes, Route, Link } from "react-router-dom";
import AddSong from "./components/AddSong";
import Nav from "./components/Nav";

function App() {
  const [register, setRegister] = useState(false);
  const [login, setLogin] = useState(false);
  const [fpw, setFpw] = useState(false);
  const [code, setCode] = useState(false);
  const registerPopup: PopupProps = {
    open: register,
    close: setRegister,
    children: <Register />,
  };
  const loginPopup: PopupProps = {
    open: login,
    close: setLogin,
    children: <Login />,
  };
  const fpwPopup: PopupProps = {
    open: fpw,
    close: setFpw,
    children: <ForgetPw />,
  };
  const codePopup: PopupProps = {
    open: code,
    close: setCode,
    children: <MailCode />,
  };
  return (
    <section className="">
      <Background />
      <SearchBar />
      <button onClick={() => setRegister(true)}>Register</button>
      <Popup {...registerPopup} />
      <button onClick={() => setLogin(true)}>Login</button>
      <Popup {...loginPopup} />
      <button onClick={() => setFpw(true)}>Forgot Password</button>
      <Popup {...fpwPopup} />
      <button onClick={() => setCode(true)}>Mail Code</button>
      <Popup {...codePopup} />
      <Nav />
      <Routes>
        <Route path="addSong" element={<AddSong />} />
      </Routes>
      <div
        className="h-screen w-screen animate-gradient absolute top-0 z-0"
        id="grad"
        onClick={() => {
          setRegister(false);
          setLogin(false);
          setFpw(false);
          setCode(false);
        }}
      ></div>
    </section>
  );
}

export default App;
