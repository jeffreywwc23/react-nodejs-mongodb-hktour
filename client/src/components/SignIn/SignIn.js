import React, { useState } from 'react';
import './SignIn.css';
import { IoLogoGoogle, IoLogoFacebook } from 'react-icons/io';
import { connect } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';

import { LoginAction, GoogleLoginAction, FacebookLoginAction } from '../../redux/User/User.actions';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

function SignIn(props) {
    const { login, googleLogin, facebookLogin, handleClick } = props;
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

    const responseGoogle = (response) => {
        const email = response.profileObj;
        const GoogleAccessToken = response.accessToken;
        googleLogin(email, GoogleAccessToken, history);
    }

    const responseFacebook = (response) => {
        console.log(response);
        const emailFromFacebook = response.email;
        const FbAccessToken = response.accessToken;
        facebookLogin(emailFromFacebook, FbAccessToken, history);
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
                            <GoogleLogin
                                clientId="332058097001-td97j17srh0cth4sqv6jcsqcjhemk9pn.apps.googleusercontent.com"
                                render={renderProps => (
                                    <IoLogoGoogle
                                        onClick={renderProps.onClick}
                                        disabled={renderProps.disabled}
                                    />
                                )}
                                buttonText="Login"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy={'single_host_origin'}
                            />
                        </div>
                        <div className="social-media-icon">
                            <FacebookLogin
                                appId="3561903037233625"
                                callback={responseFacebook}
                                fields="first_name, last_name, email"
                                scope="public_profile, email"
                                returnScopes={true}
                                disableMobileRedirect={true}
                                render={renderProps => (
                                    <IoLogoFacebook
                                    // onClick={renderProps.onClick}
                                    />
                                )}
                            />
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
        googleLogin: (googleLoginState, GoogleAccessToken, history) => {
            dispatch(GoogleLoginAction(googleLoginState, GoogleAccessToken, history));
        },
        facebookLogin: (emailFromFacebook, FbAccessToken, history) => {
            dispatch(FacebookLoginAction(emailFromFacebook, FbAccessToken, history));
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignIn);