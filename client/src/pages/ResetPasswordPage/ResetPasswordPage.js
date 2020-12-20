import React, { useState } from 'react';
import './ResetPasswordPage.css';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { ResetPasswordAction } from '../../redux/User/User.actions';

function ResetPasswordPage(props) {
    const { reset } = props;
    const [resetPasswordState, setResetPasswordState] = useState({
        password: "",
        passwordConfirm: "",
    });

    const { password, passwordConfirm } = resetPasswordState;

    const history = useHistory();

    //Handle change from inputs
    const handleResetChange = e => {
        const { name, value } = e.target;
        setResetPasswordState({
            ...resetPasswordState,
            [name]: value
        })
    }

    const handleResetSubmit = async e => {
        e.preventDefault();
        const token = props.match.params.token;
        reset(resetPasswordState, token, history);
    }

    return (
        <section className="reset-password-container">
            <div className="reset-password-wrapper">
                <div className="reset-password-form">
                    <form onSubmit={handleResetSubmit}>
                        <h2>Reset Password</h2>

                        <label htmlFor="password">
                            <span>New Password</span>
                            <input type="password" name="password" value={password || ''} onChange={handleResetChange} />
                        </label>

                        <label htmlFor="passwordConfirm">
                            <span>New Comfirmed Password</span>
                            <input type="password" name="passwordConfirm" value={passwordConfirm || ''} onChange={handleResetChange} />
                        </label>

                        <button className="submit" type="submit">Submit</button>
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
        reset: (resetPasswordState, token, history) => {
            dispatch(ResetPasswordAction(resetPasswordState, token, history));
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ResetPasswordPage);