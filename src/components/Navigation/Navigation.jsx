import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

const makeNavLinksPage = ({ isActive }) => {
  return clsx(css.link, isActive && css.isActive);
};
export default function Navigation() {
  return (
    <header>
      <nav>
        <NavLink to="/" className={makeNavLinksPage}>
          Home
        </NavLink>
        <NavLink to="/movie" className={makeNavLinksPage}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
}
