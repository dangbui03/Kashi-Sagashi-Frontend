import { useState, useEffect } from "react";
import { Dispatch, SetStateAction } from "react";
import { Tooltip } from "@material-tailwind/react";
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export type ForgotPwProps = {
  mailCode: boolean;
  setMailCode: Dispatch<SetStateAction<boolean>>;
  forgotPw: boolean;
  setForgotPw: Dispatch<SetStateAction<boolean>>;
};
const ForgotPw = (ForgotPwProps: ForgotPwProps) => {
  const [mail, setMail] = useState("");
  const [validMail, setValidMail] = useState(false);
  const [mailFocus, setMailFocus] = useState(false);

  useEffect(() => {
    const result = EMAIL_REGEX.test(mail);
    console.log(result);
    console.log(mail);
    setValidMail(result);
  }, [mail]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const v1 = USER_REGEX.test(user);
    // const v2 = PWD_REGEX.test(pwd);
    // if (!v1 || !v2) {
    //   setErrMsg("Invalid Entry");
    //   return;
    // }
    // try {
    //   const response = await axios.post(
    //     REGISTER_URL,
    //     JSON.stringify({ user, pwd }),
    //     {
    //       headers: {
    //         "Content-Type": "application/json",
    //         withCredentials: true,
    //       },
    //     },
    //   );
    //   console.log(JSON.stringify(response));
    //   setSuccess(true);
    //   //clear input fields
    // } catch (err) {
    //   if (!err?.response) {
    //     setErrMsg("No Server Response");
    //   } else if (err.response.status === 409) {
    //     setErrMsg("Username Taken");
    //   } else {
    //     setErrMsg("Registration Failed");
    //   }
    //   errRef.current.focus();
    // }
    alert("Success");
  };
  return (
    <>
      <h1>Forgot Password</h1>
      <form onSubmit={handleSubmit} className="">
        <Tooltip
          content="Please enter valid email address."
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
          placement="right-end"
          className="tooltip bg-dark-blue p-2 z-50"
        >
          <div className="formControl flex flex-col gap-2">
            <label htmlFor="mail">Email:</label>
            <input
              type="email"
              name="mail"
              id="mail"
              autoComplete="off"
              onChange={(e) => setMail(e.target.value)}
              required
              aria-invalid={validMail ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setMailFocus(true)}
              onBlur={() => setMailFocus(false)}
              className="input p-1 rounded-lg"
            />
          </div>
        </Tooltip>
        <button
          disabled={!validMail ? true : false}
          onClick={() => {
            ForgotPwProps.setForgotPw(false);
            ForgotPwProps.setMailCode(true);
          }}
          className="input w-full my-5 rounded-xl disabled:cursor-not-allowed disabled:brightness-50"
        >
          Next
        </button>
      </form>
    </>
  );
};

export default ForgotPw;
