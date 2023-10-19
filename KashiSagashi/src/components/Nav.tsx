import { Link } from "react-router-dom";
import { useState } from "react";
import Register from "./Register";
import Login from "./Login";
import AddSong from "./AddSong";
import SongsView from "./SongsView";
import Popup from "./Popup";
import { PopupProps } from "./Popup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dispatch, SetStateAction } from "react";
import { Tooltip, Button } from "@material-tailwind/react";
import { CookiesProvider, useCookies } from "react-cookie";

export type NavProps = {
  register: boolean;
  setRegister: Dispatch<SetStateAction<boolean>>;
  login: boolean;
  setLogin: Dispatch<SetStateAction<boolean>>;
  addSong: boolean;
  setAddSong: Dispatch<SetStateAction<boolean>>;
};

const Nav = (NavProps: NavProps) => {
  const [cookies, setCookie] = useCookies(["user", "admin"]);
  return (
    <CookiesProvider>
      <nav className="flex justify-end view_font">
        {cookies.user === false ? (
          <ul
            className="flex justify-between gap-5 fixed tool_bar pb-1 pl-3 -translate-x-10 pr-10 text-xl z-30"
            style={{ color: "#b6fffa", backgroundColor: "#687eff" }}
          >
            <li className="flex">
              <button onClick={() => NavProps.setRegister(true)}>
                Sign Up
              </button>
            </li>
            <li>
              <button onClick={() => NavProps.setLogin(true)}>Sign In</button>
            </li>
          </ul>
        ) : (
          <></>
        )}
        <FontAwesomeIcon
          icon="gear"
          spin
          size="2xl"
          style={{ color: "#b6fffa", backgroundColor: "#687eff" }}
          className="rounded-full p-5 fixed -top-4 -right-4 z-30"
        />
        {cookies.user ? (
          <div className="">
            <ul
              className="flex flex-col justify-end gap-5 translate-y-10 pt-3 pl-1 pb-3 fixed right-0 tool_bar z-30"
              style={{ backgroundColor: "#687eff" }}
            >
              {cookies.user ? (
                <li className="bg-inherit">
                  <Tooltip
                    content="Submit song"
                    animate={{
                      mount: { scale: 1, y: 0 },
                      unmount: { scale: 0, y: 25 },
                    }}
                    placement="left"
                    className="tooltip bg-dark-blue p-2"
                  >
                    <button onClick={() => NavProps.setAddSong(true)}>
                      <FontAwesomeIcon
                        icon="plus"
                        size="2xl"
                        style={{ color: "#b6fffa" }}
                      />
                    </button>
                  </Tooltip>
                </li>
              ) : (
                <></>
              )}

              {cookies.admin ? (
                <li className="">
                  <Tooltip
                    content="Verify song"
                    animate={{
                      mount: { scale: 1, y: 0 },
                      unmount: { scale: 0, y: 25 },
                    }}
                    placement="left"
                    className="tooltip bg-dark-blue p-2"
                  >
                    <Link to="/verifySong">
                      <FontAwesomeIcon
                        icon="check"
                        size="2xl"
                        style={{ color: "#b6fffa" }}
                      />
                    </Link>
                  </Tooltip>
                </li>
              ) : (
                <></>
              )}
              {cookies.user ? (
                <li
                  className=" cursor-pointer"
                  onClick={() => {
                    setCookie("user", false, { path: "/" });
                    setCookie("admin", false, { path: "/" });
                  }}
                >
                  <Tooltip
                    content="Sign out"
                    animate={{
                      mount: { scale: 1, y: 0 },
                      unmount: { scale: 0, y: 25 },
                    }}
                    placement="left"
                    className="tooltip bg-dark-blue p-2"
                  >
                    <FontAwesomeIcon
                      icon="right-from-bracket"
                      size="2xl"
                      style={{ color: "#b6fffa" }}
                    />
                  </Tooltip>
                </li>
              ) : (
                <></>
              )}
            </ul>
          </div>
        ) : (
          <></>
        )}
      </nav>
    </CookiesProvider>
  );
};

export default Nav;
