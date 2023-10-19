import { useState } from "react";
import { Dispatch, SetStateAction } from "react";
export type MailCodeProps = {
  mailCode: boolean;
  setMailCode: Dispatch<SetStateAction<boolean>>;
  resetPw: boolean;
  setResetPw: Dispatch<SetStateAction<boolean>>;
};
const MailCode = (MailCodeProps: MailCodeProps) => {
  const [code, setCode] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <>
      <h1>Enter the Code we sent to your email</h1>
      <form onSubmit={handleSubmit} className="">
        <div className="formControl flex flex-col gap-2">
          <label htmlFor="code">Code:</label>
          <input
            type="text"
            name="code"
            id="code"
            autoComplete="off"
            onChange={(e) => setCode(e.target.value)}
            required
            className="input p-1 rounded-lg"
          />
        </div>
        <button
          onClick={() => {
            MailCodeProps.setResetPw(true);
            MailCodeProps.setMailCode(false);
          }}
          className="input w-full my-5 rounded-xl disabled:cursor-not-allowed disabled:brightness-50"
        >
          Next
        </button>
      </form>
    </>
  );
};

export default MailCode;
