import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
return (
    <nav>
    <ul className={css.navigation}>
        <li className={css.navigation__item}>
        <NavLink
            className={css.navigation__link}
            to="/"
            style={({ isActive }) => (isActive ? css.navigation__link + ' ' + css.active : css.navigation__link)}
        >
            Home
        </NavLink>
        </li>
        <li className={css.navigation__item}>
        <NavLink
            className={css.navigation__link}
            to="/contacts"
            style={({ isActive }) => (isActive ? css.navigation__link + ' ' + css.active : css.navigation__link)}
        >
            Contacts
        </NavLink>
        </li>
    </ul>
    </nav>
);
};

export default Navigation;