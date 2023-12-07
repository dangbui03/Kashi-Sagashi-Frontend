import { setCookie, getCookie } from "cookies-next";
export default function SignOutAction() {
  setCookie("jwt", "");
  setCookie("accessToken", "");
  setCookie("loggedIn", false);
  setCookie("username", "");
  setCookie("User", "");
  setCookie("Admin", "");

  return { message: "Sign out success" };
}
