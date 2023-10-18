import React, {
  MouseEventHandler,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";
export type PopupProps = {
  open: boolean;
  close?: Dispatch<SetStateAction<boolean>>;
  children?: ReactNode;
};
const Popup = ({ open, close, children }: PopupProps) => {
  return open ? (
    <section
      className="w-60 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-3/4 z-50 p-3 rounded-2xl"
      style={{ color: "#b6fffa", backgroundColor: "#687eff" }}
    >
      {children}
    </section>
  ) : (
    <></>
  );
};

export default Popup;
