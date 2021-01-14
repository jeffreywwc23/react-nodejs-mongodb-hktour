import React, { useState } from 'react';
import './SignUp.css';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { SignUpAction } from '../../redux/User/User.actions';

function SignUp(props) {
    const { signUp, handleClick } = props;

    const [userSignUpState, setUserSignUpState] = useState({
        name: "",
        email: "",
        password: "",
        passwordConfirm: "",
    })

    const { name, email, password, passwordConfirm } = userSignUpState;

    const history = useHistory();

    //Handle SignUp Change from inputs
    const handleSignUpChange = e => {
        const { name, value } = e.target;
        setUserSignUpState({
            ...userSignUpState,
            [name]: value,
        })
    }

    const handleSignUpSubmit = async e => {
        e.preventDefault();
        signUp(userSignUpState, history);
    }

    return (
        <div className="sign-form sign-up-container">
            <div className="form-container">
                <form onSubmit={handleSignUpSubmit}>
                    <h2>Create an account</h2>
                    <input type="text" name="name" placeholder="Name" value={name} onChange={handleSignUpChange} />
                    <input type="email" name="email" placeholder="Email address" value={email} onChange={handleSignUpChange} />
                    <input type="password" name="password" placeholder="Password" value={password} onChange={handleSignUpChange} />
                    <input type="password" name="passwordConfirm" placeholder="Confirm Password" value={passwordConfirm} onChange={handleSignUpChange} />

                    <button className="submit" type="submit">Sign Up</button>
                    <p className="panel-switcher" onClick={() => handleClick()}> Already have an account ?</p>
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
        signUp: (userSignUpState, history) => {
            dispatch(SignUpAction(userSignUpState, history));
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp);