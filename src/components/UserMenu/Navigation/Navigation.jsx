import './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
    <nav>
        <ul className="navigation">
        <li className="navigation__item">
            <NavLink
            className="navigation__link"
            activeClassName="active"
            to="/"
            >
            Home
            </NavLink>
        </li>
        <li className="navigation__item">
            <NavLink
            className="navigation__link"
            activeClassName="active"
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
