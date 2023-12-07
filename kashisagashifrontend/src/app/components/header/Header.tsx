import Logo from "./Logo";
import Navbar from "./Navbar";
import dynamic from "next/dynamic";

const NoSSRNavbar = dynamic(() => import("./Navbar"), {
  ssr: false,
});
export default function Header() {
  return (
    <header className="flex place-content-between p-10 sticky">
      <Logo />
      <Navbar />
    </header>
  );
}
