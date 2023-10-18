import { useState } from "react";
import { Dispatch, SetStateAction } from "react";

export type LoginProps = {
  register: boolean;
  setRegister: Dispatch<SetStateAction<boolean>>;
  login: boolean;
  setLogin: Dispatch<SetStateAction<boolean>>;
  forgotPw: boolean;
  setForgotPw: Dispatch<SetStateAction<boolean>>;
};
const Login = (LoginProps: LoginProps) => {
  const [mail, setMail] = useState("");
  const [pwd, setPwd] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Success");
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
    <>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="formControl flex flex-col gap-2">
          <label htmlFor="mail">Email:</label>
          <input
            type="email"
            name="mail"
            id="mail"
            autoComplete="off"
            onChange={(e) => setMail(e.target.value)}
            required
            className="text-black rounded-lg"
          />
        </div>
        <div className="formControl flex flex-col gap-2">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            required
            className="text-black rounded-lg"
          />
        </div>
        <button>Sign In</button>
      </form>
      <p
        onClick={() => {
          LoginProps.setRegister(true);
          LoginProps.setLogin(false);
        }}
      >
        Need an Account?
      </p>
      <p
        onClick={() => {
          LoginProps.setForgotPw(true);
          LoginProps.setLogin(false);
        }}
      >
        Forgot password?
      </p>
    </>
  );
};

export default Login;
