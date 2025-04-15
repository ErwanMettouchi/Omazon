import { Link } from "react-router";
import "./HeaderLogo.css";

export default function () {
  return (
    <div className="header-logo">
      <Link to="/">
        <img src="/resources/logos/omazon.svg" alt="Logo de Omazon" />
      </Link>
    </div>
  );
}
