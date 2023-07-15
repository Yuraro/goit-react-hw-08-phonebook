import css from './AuthMenu.module.css';
import { NavLink } from 'react-router-dom';

const AuthMenu = () => {

return (
    <ul className={css.user__bar}>
    <li className={css.navigation__item}>
        <NavLink
        className={css.navigation__link}
        to="/register"
        style={({ isActive }) => (isActive ? css.navigation__link + ' ' + css.active : css.navigation__link)}
        >
        Register
        </NavLink>
    </li>
    <li className={css.navigation__item}>
        <NavLink
        className={css.navigation__link}
        to="/login"
        style={({ isActive }) => (isActive ? css.navigation__link + ' ' + css.active : css.navigation__link)}
    >
        Login
        </NavLink>
    </li>
    </ul>
);
};

export default AuthMenu;