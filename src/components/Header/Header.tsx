import type { IProducts } from "../../@types/index.d";
import "./Header.css";
import HeaderForm from "./HeaderForm/HeaderForm";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderMenu from "./HeaderMenu/HeaderMenu";

interface IHeaderProps {
  cartProducts: IProducts[];
}

export default function Header({ cartProducts }: IHeaderProps) {
  return (
    <header className="header">
      <HeaderLogo />
      <HeaderForm />
      <HeaderMenu cartProducts={cartProducts} />
    </header>
  );
}
