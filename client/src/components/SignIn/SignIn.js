import React, { useState } from 'react';
import './SignIn.css';
import { IoLogoGoogle, IoLogoFacebook, IoLogoTwitter } from 'react-icons/io';
import { connect } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';

import { LoginAction } from '../../redux/User/User.actions';

function SignIn(props) {
    const { login, handleClick } = props;

    const [userLoginState, setUserLoginState] = useState({
        email: "",
        password: ""
    });

    const { email, password } = userLoginState;
    const history = useHistory();

    //Handle change from inputs
    const handleLoginChange = e => {
        const { name, value } = e.target;
        setUserLoginState({
            ...userLoginState,
            [name]: value,
        })
    }

    const handleLoginSubmit = async e => {
        e.preventDefault();
        login(userLoginState, history);
    }


    return (
        <div className="sign-form login-container">
            <div className="form-container">
                <form onSubmit={handleLoginSubmit}>
                    <h2>Welcome back!</h2>

                    <input type="email" name="email" placeholder="Email" value={email} onChange={handleLoginChange} />
                    <input type="password" name="password" placeholder="Password" value={password} onChange={handleLoginChange} />

                    <button className="submit" type="submit">Sign In</button>

                    <div className="sign-social-media-icons">
                        <div className="social-media-icon">
                            <IoLogoGoogle />
                        </div>
                        <div className="social-media-icon">
                            <IoLogoFacebook />
                        </div>
                        <div className="social-media-icon">
                            <IoLogoTwitter />
                        </div>
                    </div>

                    <p className="forgot-password"><Link to='/forgot-password-page'>Forgot Password?</Link></p>
                    <p className="panel-switcher" onClick={() => handleClick()}>Don't have an account?</p>
                </form>
            </div>
        </div>
    )
};


const mapStateToProps = (state) => ({
    user: state.user,
});

const mapDispatchToProps = (dispatch) => {
    return {
        login: (userLoginState, history) => {
            dispatch(LoginAction(userLoginState, history));
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignIn);