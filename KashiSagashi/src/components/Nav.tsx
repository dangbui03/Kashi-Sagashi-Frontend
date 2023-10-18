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

export type NavProps = {
  register: boolean;
  setRegister: Dispatch<SetStateAction<boolean>>;
  login: boolean;
  setLogin: Dispatch<SetStateAction<boolean>>;
};

const Nav = (NavProps: NavProps) => {
  return (
    <nav className="flex justify-end view_font">
      <ul
        className="flex justify-between gap-5 fixed tool_bar pb-1 pl-3 -translate-x-10 pr-10 text-xl z-30"
        style={{ color: "#b6fffa", backgroundColor: "#687eff" }}
      >
        <li className="flex">
          <button
            onClick={() => NavProps.setRegister(true)}
            className="cursor-pointer"
          >
            Sign Up
          </button>
        </li>
        <li className="flex">
          <button onClick={() => NavProps.setLogin(true)}>Sign In</button>
        </li>
      </ul>
      <div className="">
        <FontAwesomeIcon
          icon="gear"
          spin
          size="2xl"
          style={{ color: "#b6fffa", backgroundColor: "#687eff" }}
          className="rounded-full p-5 fixed -top-4 -right-4 z-30"
        />
        <ul
          className="flex flex-col justify-end gap-5 translate-y-10 pt-3 pl-1 pb-3 fixed right-0 tool_bar z-30"
          style={{ backgroundColor: "#687eff" }}
        >
          <li className="z-40">
            <Link to="/searchSong">
              <FontAwesomeIcon
                icon="magnifying-glass"
                size="2xl"
                style={{ color: "#b6fffa" }}
              />
            </Link>
          </li>
          <li className="z-40">
            <Link to="/addSong">
              <FontAwesomeIcon
                icon="plus"
                size="2xl"
                style={{ color: "#b6fffa" }}
              />
            </Link>
          </li>
          <li className="z-40">
            <Link to="/verifySong">
              <FontAwesomeIcon
                icon="check"
                size="2xl"
                style={{ color: "#b6fffa" }}
              />
            </Link>
          </li>
          <li className="z-40">
            <FontAwesomeIcon
              icon="right-from-bracket"
              size="2xl"
              style={{ color: "#b6fffa" }}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
