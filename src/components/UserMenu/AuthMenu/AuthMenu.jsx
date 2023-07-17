import css from './AuthMenu.module.css';
import { NavLink } from 'react-router-dom';

const AuthMenu = () => {
return (
    <ul className={css.user__bar}>
        <li className={css.list__regist}>
        <NavLink
            className={css.list__regist_item}
            activeClassName={css.active}
            to="/register"
        >
            Register
        </NavLink>
        </li>
        <li className={css.list__regis}>
        <NavLink
            className={css.list__regist_item}
            activeClassName={css.active}
            to="/login"
        >
            Login
        </NavLink>
        </li>
    </ul>

);
};

export default AuthMenu;
