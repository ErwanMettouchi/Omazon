import { Link } from "react-router";
import "./HeaderMenu.css";
import type { IProducts } from "../../../@types/index.d";

interface IHeaderMenuProps {
  cartProducts: IProducts[];
}

export default function ({ cartProducts }: IHeaderMenuProps) {
  return (
    <div className="header-nav-right">
      <div className="header-nav-right-account">
        <Link to="/account" className="header-nav-right-account-link-text">
          Bonjour, identifiez-vous
          <p className="link--bold">
            Compte et listes
            <img src="/resources/icons/caret-down.svg" alt="" />
          </p>
        </Link>
        <Link to="/account" className="header-nav-right-account-link-logo">
          <img src="/resources/icons/user.svg" alt="Logo utilisateur" />
        </Link>
      </div>
      <div className="header-nav-right-cart">
        <Link className="header-nav-right-cart-icon" to="/cart">
          <img src="/resources/icons/cart.svg" alt="Panier" />
          <span
            className={`cart-count ${
              cartProducts.length > 9 ? "high-length" : ""
            }`}
          >
            {cartProducts.length > 9 ? "9+" : String(cartProducts.length)}
          </span>
        </Link>
        <Link to="/cart" className="header-nav-right-cart-link">
          Panier
        </Link>
      </div>
    </div>
  );
}
