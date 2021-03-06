import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { UpdatePasswordAction } from '../../redux/User/User.actions';

import UserIcon from "../../assets/img/users/default.jpg";
import { FaEnvelope, FaBell } from 'react-icons/fa';

const UserProfile = (props) => {
    const history = useHistory();
    const { user, updatePassword } = props;

    const [updatePasswordState, setUpdatePasswordState] = useState({
        passwordCurrent: "",
        password: "",
        passwordConfirm: "",
    });

    const { passwordCurrent, password, passwordConfirm } = updatePasswordState;

    const handleUpdatePasswordChange = e => {
        const { name, value } = e.target;
        setUpdatePasswordState({
            ...updatePasswordState,
            [name]: value
        })
    };

    const handleUpdatePasswordSubmit = async e => {
        e.preventDefault();
        const token = props.user.userState.token;
        updatePassword(updatePasswordState, token, history);
    };

    return (
        <div className="profile-content">
            <div className="actions">
                <FaEnvelope className="profile-content-icon profile-content-envelope" />
                <FaBell className="profile-content-icon profile-content-bell" />
            </div>

            <div className="pic">
                <img src={UserIcon} alt="profile" />
                {
                    user.userState.userData ?
                        <>
                            <h2>{user.userState.userData.name}</h2>
                            <span>{user.userState.userData.role}</span>
                            <span>{user.userState.userData.email}</span>
                        </> :
                        null
                }
            </div>

            <div className="profile-details-container">
                <span className="form-header">Password Change</span>

                <div className="form-container">
                    <form onSubmit={handleUpdatePasswordSubmit}>
                        <div className="input-group">
                            <span>Current Password</span>
                            <input className="input-field" type="password" name="passwordCurrent" value={passwordCurrent || ''} onChange={handleUpdatePasswordChange} required />
                        </div>
                        <div className="input-group">
                            <span>New Password</span>
                            <input className="input-field" type="password" name="password" value={password || ''} onChange={handleUpdatePasswordChange} required />
                        </div>
                        <div className="input-group">
                            <span>Confirm New Password</span>
                            <input className="input-field" type="password" name="passwordConfirm" value={passwordConfirm || ''} onChange={handleUpdatePasswordChange} required />
                        </div>

                        <button className="profile-button" type="submit">
                            Submit
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    user: state.userContainer,
});

const mapDispatchToProps = (dispatch) => {
    return {
        updatePassword: (updatePasswordState, token, history) => {
            dispatch(UpdatePasswordAction(updatePasswordState, token, history));
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserProfile);