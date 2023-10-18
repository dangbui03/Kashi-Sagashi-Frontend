import { useState } from "react";

const MailCode = () => {
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
            className="text-black rounded-lg"
          />
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};

export default MailCode;
