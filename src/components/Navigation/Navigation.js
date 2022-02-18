import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <NavLink
        exact
        className={styles.link}
        activeClassName={styles.activeClass}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        exact
        className={styles.link}
        activeClassName={styles.activeClass}
        to="/Movies"
      >
        Movies
      </NavLink>
    </nav>
  );
}
