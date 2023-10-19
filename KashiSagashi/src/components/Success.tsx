import React from "react";
import { Dispatch, SetStateAction } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export type SuccessProps = {
  message: string;
};
const Success = (SuccessProps: SuccessProps) => {
  return (
    <section className="flex justify-center flex-col h-32 gap-5">
      <FontAwesomeIcon
        icon="circle-check"
        bounce
        size="2xl"
        style={{ color: "#b6fffa" }}
      />
      <p className=" text-center">{SuccessProps.message}</p>
    </section>
  );
};

export default Success;
