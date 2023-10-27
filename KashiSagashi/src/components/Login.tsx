import { useState, useEffect } from "react";
import { Dispatch, SetStateAction } from "react";
import { CookiesProvider, useCookies } from "react-cookie";
import { Tooltip } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export type LoginProps = {
  register: boolean;
  setRegister: Dispatch<SetStateAction<boolean>>;
  login: boolean;
  setLogin: Dispatch<SetStateAction<boolean>>;
  forgotPw: boolean;
  setForgotPw: Dispatch<SetStateAction<boolean>>;
  success: boolean;
  setSuccess: Dispatch<SetStateAction<boolean>>;
};
const Login = (LoginProps: LoginProps) => {
  const [mail, setMail] = useState("");
  const [validMail, setValidMail] = useState(false);
  const [mailFocus, setMailFocus] = useState(false);

  const [pwd, setPwd] = useState("");

  const [cookies, setCookie] = useCookies(["user", "admin"]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(mail);
    console.log(result);
    console.log(mail);
    setValidMail(result);
  }, [mail]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // setCookie("user", true, { path: "/" });
    // try {
    //   const response = await axios.post(
    //     LOGIN_URL,
    //     JSON.stringify({ user, pwd }),
    //     {
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       withCredentials: true,
    //     }
    //   );
    //   console.log(JSON.stringify(response.data));
    //   const accessToken = response?.data?.accessToken;
    //   const roles = response?.data?.roles;
    //   setAuth({ user, roles, accessToken });
    //   //setUser("");
    //   resetUser();
    //   setPwd("");
    //   navigate(from, { replace: true });
    // } catch (err) {
    //   if (!err?.response) {
    //     setErrMsg("No Server Response");
    //   } else if (err.response?.status === 400) {
    //     setErrMsg("Missing Username or Password");
    //   } else if (err.response?.status === 401) {
    //     setErrMsg("Unauthorized");
    //   } else {
    //     setErrMsg("Login Failed");
    //   }
    //   errRef.current.focus();
    // }
  };
  return (
    <CookiesProvider>
      <form onSubmit={handleSubmit} className="w-full">
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
        <div className="formControl flex flex-col gap-2">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            required
            className="input p-1 rounded-lg"
          />
        </div>
        <button
          onClick={() => {
            LoginProps.setSuccess(true);
            LoginProps.setLogin(false);
            setCookie("user", true, { path: "/" });
            if (pwd === "admin") setCookie("admin", true, { path: "/" });
          }}
          className="input w-full my-5 rounded-xl disabled:cursor-not-allowed disabled:brightness-50"
        >
          Sign In
        </button>
      </form>
      <p
        className=" cursor-pointer"
        onClick={() => {
          LoginProps.setRegister(true);
          LoginProps.setLogin(false);
        }}
      >
        Need an Account?
      </p>
      <p
        className=" cursor-pointer"
        onClick={() => {
          LoginProps.setForgotPw(true);
          LoginProps.setLogin(false);
        }}
      >
        Forgot password?
      </p>
      <div className="formControl flex flex-col items-center gap-4 cursor-pointer my-3">
        <p>OR</p>
        <FontAwesomeIcon
          icon="fa-brands fa-google"
          size="2xl"
          style={{ color: "#b6fffa", backgroundColor: "#80b3ff" }}
          className="rounded-xl w-10 p-2"
        />
      </div>
    </CookiesProvider>
  );
};

export default Login;
