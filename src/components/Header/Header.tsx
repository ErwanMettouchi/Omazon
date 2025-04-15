import "./Header.css";
import HeaderForm from "./HeaderForm/HeaderForm";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderMenu from "./HeaderMenu/HeaderMenu";

export default function Header() {
  return (
    <header className="header">
      <HeaderLogo />
      <HeaderForm />
      <HeaderMenu />
    </header>
  );
}
