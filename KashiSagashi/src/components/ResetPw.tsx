import { useState, useEffect } from "react";
import { Dispatch, SetStateAction } from "react";
const PWD_REGEX =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-_]).{8,64}$/;
export type ResetPwProps = {
  resetPw: boolean;
  setResetPw: Dispatch<SetStateAction<boolean>>;
  success: boolean;
  setSuccess: Dispatch<SetStateAction<boolean>>;
};
const ResetPw = (ResetPwProps: ResetPwProps) => {
  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

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
    // alert("Success");
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="">
        <div className="formControl flex flex-col gap-2">
          <label htmlFor="password">New password:</label>
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
            className="input p-1 rounded-lg"
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
          disabled={!(validPwd && validMatch) ? true : false}
          onClick={() => {
            ResetPwProps.setResetPw(false);
            ResetPwProps.setSuccess(true);
          }}
          className="input w-full my-5 rounded-xl disabled:cursor-not-allowed disabled:brightness-50"
        >
          Change password
        </button>
      </form>
    </>
  );
};

export default ResetPw;
