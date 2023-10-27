import { faL } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState, useEffect } from "react";
import { Dispatch, SetStateAction } from "react";
import { Tooltip } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const PWD_REGEX =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-_]).{8,64}$/;
export type RegisterProps = {
  register: boolean;
  setRegister: Dispatch<SetStateAction<boolean>>;
  success: boolean;
  setSuccess: Dispatch<SetStateAction<boolean>>;
};
const Register = (RegisterProps: RegisterProps) => {
  const [mail, setMail] = useState("");
  const [validMail, setValidMail] = useState(false);
  const [mailFocus, setMailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  useEffect(() => {
    const result = EMAIL_REGEX.test(mail);
    console.log(result);
    console.log(mail);
    setValidMail(result);
  }, [mail]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

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
              className="rounded-lg input p-1"
            />
          </div>
        </Tooltip>
        <Tooltip
          content="
          At least: 1 upper case English letter, 1 lower case English letter, 1 number, 1 special character. And having between 8 to 64 characters."
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
          placement="right-end"
          className="tooltip bg-dark-blue p-2 z-50"
        >
          <div className="formControl flex flex-col gap-2">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              required
              aria-invalid={validPwd ? "false" : "true"}
              aria-describedby="pwdnote"
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
              className="input p-1 rounded-lg"
            />
          </div>
        </Tooltip>
        <Tooltip
          content="Must match the first password."
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
          placement="right-end"
          className="tooltip bg-dark-blue p-2 z-50"
        >
          <div className="formControl flex flex-col gap-2">
            <label htmlFor="matchpwd">Confirm password:</label>
            <input
              type="password"
              name="matchpwd"
              id="matchpwd"
              onChange={(e) => setMatchPwd(e.target.value)}
              required
              aria-invalid={validMatch ? "false" : "true"}
              aria-describedby="confirmpwdnote"
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
              className="input p-1 rounded-lg"
            />
          </div>
        </Tooltip>
        <button
          disabled={!validMail || !validPwd || !validMatch ? true : false}
          onClick={() => {
            RegisterProps.setRegister(false);
            RegisterProps.setSuccess(true);
          }}
          className="input w-full my-5 rounded-xl disabled:cursor-not-allowed disabled:brightness-50"
        >
          Sign up
        </button>
        <div className="formControl flex flex-col items-center gap-4 cursor-pointer">
          <p>OR</p>
          <FontAwesomeIcon
            icon="fa-brands fa-google"
            size="2xl"
            style={{ color: "#b6fffa", backgroundColor: "#80b3ff" }}
            className="rounded-xl w-10 p-2"
          />
        </div>
      </form>
    </>
  );
};

export default Register;
