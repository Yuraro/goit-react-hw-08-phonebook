import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
    <nav>
        <ul className={css.navigation}>
        <li className={css.navigation__item}>
            <NavLink
            className={css.navigation__link}
            activeClassName={css.active}
            to="/"
            >
            Home
            </NavLink>
        </li>
        <li className={css.navigation__item}>
            <NavLink
            className={css.navigation__link}
            activeClassName={css.active}
            to="/contacts"
            >
            Contacts
            </NavLink>
        </li>
        </ul>
    </nav>
    );
};

export default Navigation;
