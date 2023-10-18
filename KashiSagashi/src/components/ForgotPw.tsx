import { useState, useEffect } from "react";
import { Dispatch, SetStateAction } from "react";
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
            className="text-black rounded-lg"
          />
          <p
            id="uidnote"
            className={mailFocus && mail && !validMail ? "" : "hidden"}
          >
            Please enter valid email address.
          </p>
        </div>
        <button
          disabled={!validMail ? true : false}
          onClick={() => {
            ForgotPwProps.setForgotPw(false);
            ForgotPwProps.setMailCode(true);
          }}
        >
          Next
        </button>
      </form>
    </>
  );
};

export default ForgotPw;
