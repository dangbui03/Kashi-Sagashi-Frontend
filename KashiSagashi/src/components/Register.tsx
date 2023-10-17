import { useRef, useState, useEffect } from "react";
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const PWD_REGEX =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-_]).{8,64}$/;
const Register = () => {
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
      <h1>Sign up</h1>
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
            className="text-black rounded-lg"
          />
          <p
            id="pwdnote"
            className={pwdFocus && pwd && !validPwd ? "" : "hidden"}
          >
            <ul>
              At least:
              <li>1 upper case English letter</li>
              <li>1 lower case English letter</li>
              <li>1 number</li>
              <li>1 special character</li>
            </ul>
            <p>And having between 8 to 64 characters.</p>
          </p>
        </div>
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
            className="text-black rounded-lg"
          />
          <p
            id="pwdnote"
            className={matchFocus && matchPwd && !validMatch ? "" : "hidden"}
          >
            <span> </span>
            Must match the first password.
          </p>
        </div>
        <button
          disabled={!validMail || !validPwd || !validMatch ? true : false}
        >
          Sign up
        </button>
      </form>
    </>
  );
};

export default Register;
