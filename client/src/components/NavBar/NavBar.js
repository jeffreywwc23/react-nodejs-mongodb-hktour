import React, { useState } from "react";
import { NavLink, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import './NavBar.css';

import { FaTimes, FaBars } from "react-icons/fa";
import UserIcon from "../../assets/img/users/default.jpg";
import { LogOutAction } from '../../redux/User/User.actions';

function NavBar(props) {
    const { user, logout } = props;
    const history = useHistory();

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <nav className="navbar">
            <NavLink to="/" className="navbar-logo">
                HKTour.com
            </NavLink>

            <div className="menu-icon" onClick={handleClick}>
                {click ?
                    <FaTimes className="menu-icon-times" />
                    :
                    <FaBars className="menu-icon-bars" />}
            </div>

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-item">
                    <NavLink to='/tours' className="nav-links" onClick={closeMobileMenu} activeStyle={{ color: '#1888ff' }}>
                        All Tours
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/about-us' className="nav-links" onClick={closeMobileMenu} activeStyle={{ color: '#1888ff' }}>
                        About Us
                    </NavLink>
                </li>

                {user.userState.userData ? (
                    <>
                        <li className="nav-item">
                            <div
                                className="nav-links"
                                onClick={() => {
                                    closeMobileMenu();
                                    logout(history);
                                }}
                            >
                                Log Out
                            </div>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/user" className="nav-links user-link" onClick={closeMobileMenu}>
                                <div className="nav-user-container">
                                    <img src={UserIcon} alt="user" className="nav-user-img" />
                                    <span>{user.userState.userData.name.split(' ').slice(0, 1).join(' ')}</span>
                                </div>
                            </NavLink>
                        </li>

                    </>
                ) : (
                        <>
                            <li className="nav-item">
                                <NavLink to='/sign-in-sign-up' className="nav-links" onClick={closeMobileMenu} activeStyle={{ color: '#1888ff' }}>
                                    Login
                                </NavLink>
                            </li>
                        </>
                    )}

            </ul>
        </nav>
    )
};

const mapStateToProps = (state) => ({
    user: state.userContainer,
});

const mapDispatchToProps = (dispatch) => {
    return {
        logout: (history) => {
            dispatch(LogOutAction(history));
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavBar);