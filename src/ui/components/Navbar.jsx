import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../auth/context';

export const Navbar = () => {
    const { authState, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const onLogout = () => {
        logout();

        navigate('/login', {
            replace: true
        });
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Asociaciones</Link>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                to="marvel"
                            >
                                Marvel
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                to="dc"
                            >
                                DC
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                to="search"
                            >
                                Search
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="collapse navbar-collapse w-100 order-3 dual-collapce2 d-flex justify-content-end" id="navbarScroll">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item nav-link text-primary">{authState.user?.name}</li>
                        <button
                            className="nav-itme nav-link btn"
                            onClick={onLogout}
                        >
                            Logout
                        </button>
                    </ul>
                </div>
            </div>
        </nav>
    );
}