import React, { Component } from 'react';
import './Tour.css';
import { Link } from "react-router-dom";
import Date from '../../components/Date/Date';
import Footer from '../../components/Footer/Footer';
import TourGuide from './TourGuide/TourGuide';
import TourReview from './TourReview/TourReview';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import {
    FaMapPin,
    FaClock,
    FaCalendarAlt,
    FaStar,
    FaUserAlt,
    FaSortAmountUp,
} from 'react-icons/fa';
import { connect } from 'react-redux';

import { DirectCheckOutAction } from '../../redux/User/User.actions';

class Tour extends Component {
    constructor(props) {
        super(props);

        this.findSingletour = this.findSingletour.bind(this);
    }

    findSingletour = (tourId) => {
        const notYetFilterTours = this.props.tours.tourState.data;
        let filtered = [];

        if (notYetFilterTours && tourId) {
            filtered = notYetFilterTours.find((tour) => {
                return tour._id === tourId
            });
        }
        return filtered;
    };

    handleBookingCheckOut = () => {
        const tourId = this.props.match.params._id;
        const token = this.props.user.userState.token;
        this.props.directCheckOut(tourId, token);
    };

    render() {
        const tourId = this.props.match.params._id;
        let FilteredTour = this.findSingletour(tourId);

        const {
            name,
            imageCover,
            description,
            duration,
            startLocation,
            startDates,
            difficulty,
            maxGroupSize,
            ratingsAverage,
            ratingsQuantity,
            images
        } = FilteredTour || [];
        const currentUser = this.props.user;

        return (
            this.props.match.params._id &&
            <div className="tour-container">
                <section className="section-header" style={{ backgroundImage: "url(" + imageCover + ")" }}>
                    <div className="heading-box">
                        <h1 className="heading-primary">
                            <span>{name}</span>
                        </h1>
                        <div className="heading-box-group">
                            <div className="heading-box-detail">
                                <FaClock className="heading-box-icon" />
                                <span className="heading-box-text">{duration} days</span>
                            </div>
                            <div className="heading-box-detail">
                                <FaMapPin className="heading-box-icon" />
                                <span className="heading-box-text">{startLocation && startLocation['description']}</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-description">
                    <div className="overview-box">
                        <div>
                            <div className="overview-box-group">
                                <h2 className="heading-secondary section-description-heading-bottom">Brief</h2>
                                <div className="overview-box-detail">
                                    <FaCalendarAlt className="overview-box-icon" />
                                    <span className="overview-box-label">Next Date</span>
                                    <span className="overview-box-text"><Date startDates={(startDates && startDates.length > 0) && startDates[0]} /></span>
                                </div>
                                <div className="overview-box-detail">
                                    <FaSortAmountUp className="overview-box-icon" />
                                    <span className="overview-box-label">Difficulty</span>
                                    <span className="overview-box-text">{difficulty}</span>
                                </div>
                                <div className="overview-box-detail">
                                    <FaUserAlt className="overview-box-icon" />
                                    <span className="overview-box-label">Participants</span>
                                    <span className="overview-box-text">{maxGroupSize}</span>
                                </div>
                                <div className="overview-box-detail">
                                    <FaStar className="overview-box-icon" />
                                    <span className="overview-box-label">Rating</span>
                                    <span className="overview-box-text">{`${ratingsAverage} (${ratingsQuantity})`}</span>
                                </div>
                            </div>

                            <TourGuide />
                        </div>
                    </div>

                    <div className="description-box">
                        <h2 className="heading-secondary section-description-heading-bottom">About {name}</h2>
                        <p className="description-text">
                            {description}
                        </p>
                    </div>
                </section>

                <TourReview />

                <section className="section-pictures">
                    <div className="picture-box">
                        <LazyLoadImage
                            effect="blur"
                            className="picture-box-img picture-box-img-1"
                            alt={`${name} 1`}
                            src={`${images && images.length > 0 ? images[0] : ''}`}
                        />
                    </div>
                    <div className="picture-box">
                        <LazyLoadImage
                            effect="blur"
                            className="picture-box-img picture-box-img-2"
                            alt={`${name} 2`}
                            src={`${images && images.length > 0 ? images[1] : ''}`}
                        />
                    </div>
                    <div className="picture-box">
                        <LazyLoadImage
                            effect="blur"
                            className="picture-box-img picture-box-img-3"
                            alt={`${name} 3`}
                            src={`${images && images.length > 0 ? images[2] : ''}`}
                        />
                    </div>
                </section>

                <section className="section-payment">
                    <div className="section-payment-box">
                        <LazyLoadImage
                            effect="blur"
                            className="section-payment-box-img section-payment-box-img-0"
                            alt="Tour payment cover1"
                            src={`${images && images.length > 0 ? images[0] : ''}`}
                        />
                        <LazyLoadImage
                            effect="blur"
                            alt="Tour payment cover2"
                            className="section-payment-box-img section-payment-box-img-1"
                            src={`${images && images.length > 0 ? images[1] : ''}`}
                        />
                        <LazyLoadImage
                            effect="blur"
                            alt="Tour payment cover3"
                            className="section-payment-box-img section-payment-box-img-2"
                            src={`${images && images.length > 0 ? images[2] : ''}`}
                        />

                        <div className="section-payment-box-content">
                            <h2 className="heading-secondary">Love it?</h2>
                            <p className="section-payment-box-content-text">
                                {duration} days. 1 adventure. Make it yours today!
                                </p>

                            {
                                currentUser.userState.userData
                                    ?
                                    <button
                                        className="btn btn-blue span-all-rows"
                                        onClick={() => this.handleBookingCheckOut()}
                                    >
                                        Book now!
                                        </button>
                                    :
                                    <Link
                                        className="btn btn-blue span-all-rows log-in-to-book"
                                        to={`/sign-in-sign-up`}
                                    >
                                        Log in to book tour!
                                    </Link>
                            }

                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.userContainer,
    tours: state.tourContainer,
});

const mapDispatchToProps = (dispatch) => {
    return {
        directCheckOut: (tourId, token) => {
            dispatch(DirectCheckOutAction(tourId, token));
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Tour);