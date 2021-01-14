import React, { useState, useEffect } from 'react';
import './MyBooking.css';
import { connect } from 'react-redux';
import Spinner from '../Spinner/Spinner';

import { GetBookingDataAction } from '../../redux/User/User.actions';

const MyBooking = (props) => {
    const { user, getBookingData } = props;
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const token = user.userState.token;
        getBookingData(token);
        setIsLoading(false);
    }, [getBookingData, user.userState.token]);

    return (
        <>
            {
                isLoading &&
                <Spinner />
            }
            <section className="my-booking-container">
                <div className="my-booking-title-container">
                    <div className="my-booking-title">
                        <h1>My Booking</h1>
                    </div>
                </div>

                {
                    !isLoading && user.userBooking && user.userBooking.tours.length !== 0
                        ?
                        <>
                            {
                                user.userBooking.tours.map((tour, index) => {
                                    return (
                                        <div className="my-booking-box-container" key={index}>
                                            <div className="my-booking-box-wrapper">
                                                <div className="my-booking-box-item">
                                                    <div className="my-booking-box-item-img">
                                                        <img src={tour.imageCover} alt="" />
                                                    </div>
                                                    <div className="my-booking-box-item-content">
                                                        <span className="my-booking-box-item-code">{tour.startDates[0].split('T')[0]}</span>
                                                        <div className="my-booking-box-item-title">{tour.name}</div>
                                                        <div className="my-booking-box-item-text">{`$ ${tour.price}`}</div>
                                                        <button className="my-booking-box-item-button">Cancel</button>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="my-booking-box-item-pagination"></div>
                                        </div>
                                    )
                                })
                            }
                        </>
                        :
                        null

                }


            </section>
        </>


    );
}

const mapStateToProps = (state) => ({
    user: state.userContainer,
});

const mapDispatchToProps = (dispatch) => {
    return {
        getBookingData: (token) => {
            dispatch(GetBookingDataAction(token));
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyBooking);
