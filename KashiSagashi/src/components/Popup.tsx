import React, {
  MouseEventHandler,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";
export type PopupProps = {
  open: boolean;
  close: Dispatch<SetStateAction<boolean>>;
  children?: ReactNode;
};
const Popup = ({ open, close, children }: PopupProps) => {
  return open ? (
    <div className="flex place-content-center items-center bg-transparent">
      <section className="h-96 w-60 flex place-content-center absolute">
        {children}
      </section>
      <div
        className="h-screen w-full flex place-content-center bg-transparent"
        onClick={(e) => {
          close(false);
        }}
      ></div>
    </div>
  ) : (
    <></>
  );
};

export default Popup;
