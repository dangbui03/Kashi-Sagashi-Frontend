import React, { Dispatch, SetStateAction, ReactNode } from "react";
export type PopupProps = {
  open: boolean;
  close?: Dispatch<SetStateAction<boolean>>;
  children?: ReactNode;
  extended?: boolean;
};
const Popup = ({ open, close, children, extended }: PopupProps) => {
  return extended && open ? (
    <section
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 p-3 rounded-2xl text-xl view_font"
      style={{ color: "#b6fffa", backgroundColor: "#687eff" }}
    >
      {children}
    </section>
  ) : open ? (
    <section
      className="w-72 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-3/4 z-50 p-3 rounded-2xl text-xl view_font"
      style={{ color: "#b6fffa", backgroundColor: "#687eff" }}
    >
      {children}
    </section>
  ) : (
    <></>
  );
};

export default Popup;
