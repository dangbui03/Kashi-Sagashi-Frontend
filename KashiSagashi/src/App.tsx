import { useState } from "react";
import Background from "./components/Background";
import { Routes, Route, Link } from "react-router-dom";
import AddSong from "./components/AddSong";
import Nav from "./components/Nav";
import SongsView from "./components/SongsView";
import { song } from "./model/Song";
import { SearchBar } from "./components/SearchBar";
import { PopupProps } from "./components/Popup";
import Register from "./components/Register";
import Login from "./components/Login";
import Popup from "./components/Popup";
import ForgotPw from "./components/ForgotPw";
import MailCode from "./components/MailCode";

function App() {
  const songs: song[] = [];
  const [register, setRegister] = useState(false);
  const [login, setLogin] = useState(false);
  const [forgotPw, setForgotPw] = useState(false);
  const [mailCode, setMailCode] = useState(false);

  const registerPopup: PopupProps = {
    open: register,
    close: setRegister,
    children: <Register />,
  };
  const loginPopup: PopupProps = {
    open: login,
    close: setLogin,
    children: (
      <Login
        register={register}
        setRegister={setRegister}
        login={login}
        setLogin={setLogin}
        forgotPw={forgotPw}
        setForgotPw={setForgotPw}
      />
    ),
  };
  const forgotPwPopup: PopupProps = {
    open: forgotPw,
    close: setForgotPw,
    children: (
      <ForgotPw
        mailCode={mailCode}
        setMailCode={setMailCode}
        forgotPw={forgotPw}
        setForgotPw={setForgotPw}
      />
    ),
  };
  const mailCodePopup: PopupProps = {
    open: mailCode,
    close: setMailCode,
    children: <MailCode />,
  };
  return (
    <section>
      <Popup {...registerPopup} />
      <Popup {...loginPopup} />
      <Popup {...forgotPwPopup} />
      <Popup {...mailCodePopup} />
      <div
        className={
          register || login || forgotPw || mailCode
            ? "absolute h-screen w-screen top-0 right-0 bg-black opacity-50 z-40 pointer-events-none"
            : ""
        }
      ></div>
      <section
        className=""
        onClick={() => {
          if (register) {
            setRegister(false);
          }
          if (login) {
            setLogin(false);
          }
          if (forgotPw) {
            setForgotPw(false);
          }
          if (mailCode) {
            setMailCode(false);
          }
        }}
      >
        <Nav
          register={register}
          setRegister={setRegister}
          login={login}
          setLogin={setLogin}
        />
        <Routes>
          <Route path="addSong" element={<AddSong />} />
          <Route path="verifySong" element={<SongsView {...songs} />} />
          <Route path="searchSong" element={<SearchBar />} />
        </Routes>
        <Background />
      </section>
    </section>
  );
}

export default App;
