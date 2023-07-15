import './AuthMenu.module.css';
import { NavLink } from 'react-router-dom';

const AuthMenu = () => {
return (
    <ul className="user__bar">
        <li className="navigation__item">
        <NavLink
            className="navigation__link"
            activeClassName="active"
            to="/register"
        >
            Register
        </NavLink>
        </li>
        <li className="navigation__item">
        <NavLink
            className="navigation__link"
            activeClassName="active"
            to="/login"
        >
            Login
        </NavLink>
        </li>
    </ul>
);
};

export default AuthMenu;
