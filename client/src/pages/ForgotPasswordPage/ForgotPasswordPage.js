import React, { useState } from 'react';
import './ForgotPasswordPage.css';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { ForgotPasswordAction } from '../../redux/User/User.actions';

function ForgotPasswordPage(props) {
    const { forgot } = props;
    const [forgotState, setForgotState] = useState({
        email: "",
    });

    const { email } = forgotState;

    const history = useHistory();

    //Handle change from inputs
    const handleForgotChange = e => {
        const { name, value } = e.target;
        setForgotState({
            [name]: value
        })
    }

    const handleForgotSubmit = async e => {
        e.preventDefault();
        forgot(forgotState, history);
    }

    return (
        <section className="forgot-container">
            <div className="forgot-wrapper">
                <div className="forgot-form">
                    <form onSubmit={handleForgotSubmit}>
                        <h2>Forgot Password</h2>

                        <label htmlFor="email">
                            <span>Email Address</span>
                            <input type="email" name="email" value={email} onChange={handleForgotChange} />
                        </label>

                        <button className="submit" type="submit">Send</button>
                    </form>
                </div>
            </div>
        </section>
    )
};


const mapStateToProps = (state) => ({
    user: state.user,
});

const mapDispatchToProps = (dispatch) => {
    return {
        forgot: (forgotState, history) => {
            dispatch(ForgotPasswordAction(forgotState, history));
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ForgotPasswordPage);