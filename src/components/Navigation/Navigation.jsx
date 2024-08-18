import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav>
      <ul className={css.nav}>
        <li>
          <NavLink className={css.navlink} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={css.navlink} to="/movies">
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
