// import React, { useState } from "react";
import React from "react";
import FacebookLogin from "react-facebook-login";
import { IoLogoFacebook } from 'react-icons/io';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FacebookLoginAction } from '../../redux/User/User.actions';

const FacebookBtn = (props) => {
    // const [accessToken, setAccessToken] = useState("");
    const { facebookLogin } = props;
    const history = useHistory();



    const componentClicked = data => {
        console.log("data", data);
        // setAccessToken(data.accessToken);
    };

    const responseFacebook = (response) => {
        console.log(response);
        const emailFromFacebook = response.email;
        const FbAccessToken = response.accessToken;
        facebookLogin(emailFromFacebook, FbAccessToken, history);
    }

    return (
        <div className="social-media-icon">
            <FacebookLogin
                appId="3561903037233625"
                callback={responseFacebook}
                fields="first_name, last_name, email"
                scope="public_profile, email"
                returnScopes={true}
                disableMobileRedirect={true}
                onClick={componentClicked}
                render={renderProps => (
                    <IoLogoFacebook
                        onClick={renderProps.onClick}
                    />
                )}
            />
        </div>
    );
};

const mapStateToProps = (state) => ({
    user: state.user,
});

const mapDispatchToProps = (dispatch) => {
    return {
        facebookLogin: (emailFromFacebook, FbAccessToken, history) => {
            dispatch(FacebookLoginAction(emailFromFacebook, FbAccessToken, history));
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FacebookBtn);