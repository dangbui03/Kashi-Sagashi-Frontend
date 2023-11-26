import Logo from "./Logo";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="flex place-content-between p-10 sticky">
      <Logo />
      <Navbar />
    </header>
  );
}
