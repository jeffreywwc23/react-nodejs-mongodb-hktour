import React, { Component } from 'react';
import './Tour.css';
import { TourContext } from '../../context';
import { Link } from "react-router-dom";
import Date from '../../components/Date/Date';
import Footer from '../../components/Footer/Footer';
import Error from '../Error/Error';
import {
    FaMapPin,
    FaClock,
    FaCalendarAlt,
    FaStar,
    FaUserAlt,
    FaSortAmountUp,
    FaRegStar,
} from 'react-icons/fa';
import { connect } from 'react-redux';

import { DirectCheckOutAction } from '../../redux/User/User.actions';

class Tour extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tourId: this.props.match.params._id,
        }
    }
    static contextType = TourContext;

    handleBookingCheckOut = () => {
        console.log(this.props);
        const tourId = this.props.match.params._id;
        const token = this.props.user.userState.token;
        this.props.directCheckOut(tourId, token);
    };

    render() {
        const { getTour } = this.context;
        const tour = getTour(this.state.tourId);

        if (!tour) {
            return <Error />
        }

        const {
            // _id,
            imageCover,
            name,
            duration,
            startLocation,
            startDates,
            difficulty,
            maxGroupSize,
            ratingsAverage,
            ratingsQuantity,
            description,
            images,
        } = tour;

        const headerImage = require(`../../assets/img/tours/${imageCover}`);

        const currentUser = this.props.user.userState.userData;

        return (
            <div className="tour-container">
                <section className="section-header" style={{ backgroundImage: "url(" + headerImage + ")" }}>
                    <div className="heading-box">
                        <h1 className="heading-primary">
                            <span>{name}</span>
                        </h1>
                        <div className="heading-box__group">
                            <div className="heading-box__detail">
                                <FaClock className="heading-box__icon" />
                                <span className="heading-box__text">{duration} days</span>
                            </div>
                            <div className="heading-box__detail">
                                <FaMapPin className="heading-box__icon" />
                                <span className="heading-box__text">{startLocation.description}</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-description">
                    <div className="overview-box">
                        <div>
                            <div className="overview-box__group">
                                <h2 className="heading-secondary ma-bt-lg">Brief</h2>
                                <div className="overview-box__detail">
                                    <FaCalendarAlt className="overview-box__icon" />
                                    <span className="overview-box__label">Next Date</span>
                                    <span className="overview-box__text"><Date startDates={startDates[0]} /></span>
                                </div>
                                <div className="overview-box__detail">
                                    <FaSortAmountUp className="overview-box__icon" />
                                    <span className="overview-box__label">Difficulty</span>
                                    <span className="overview-box__text">{difficulty}</span>
                                </div>
                                <div className="overview-box__detail">
                                    <FaUserAlt className="overview-box__icon" />
                                    <span className="overview-box__label">Participants</span>
                                    <span className="overview-box__text">{maxGroupSize}</span>
                                </div>
                                <div className="overview-box__detail">
                                    <FaStar className="overview-box__icon" />
                                    <span className="overview-box__label">Rating</span>
                                    <span className="overview-box__text">{`${ratingsAverage} (${ratingsQuantity})`}</span>
                                </div>
                            </div>

                            <div className="overview-box__group">
                                <h2 className="heading-secondary ma-bt-lg">Your tour guides</h2>

                                <div className="overview-box__detail">
                                    <img
                                        src={require('../../assets/img/users/user-19.jpg')}
                                        alt="Lead guide"
                                        className="overview-box__img" />
                                    <span className="overview-box__label">Lead guide</span>
                                    <span className="overview-box__text">Jack Hamme</span>
                                </div>
                                <div className="overview-box__detail">
                                    <img
                                        src={require('../../assets/img/users/user-18.jpg')}
                                        alt="Tour guide"
                                        className="overview-box__img" />
                                    <span className="overview-box__label">Tour guide</span>
                                    <span className="overview-box__text">Chris Scott</span>
                                </div>
                                <div className="overview-box__detail">
                                    <img
                                        src={require('../../assets/img/users/user-17.jpg')}
                                        alt="Intern"
                                        className="overview-box__img"
                                    />
                                    <span className="overview-box__label">Intern</span>
                                    <span className="overview-box__text">Peter Smith</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="description-box">
                        <h2 className="heading-secondary ma-bt-lg">About {name}</h2>
                        <p className="description__text">
                            {description}
                        </p>
                    </div>
                </section>

                <section className="section-reviews">
                    <div className="reviews">
                        <div className="reviews__card">
                            <div className="reviews__avatar">
                                <img
                                    src={require('../../assets/img/users/user-7.jpg')}
                                    alt="Alexander Crown"
                                    className="reviews__avatar-img"
                                />
                                <h6 className="reviews__user">Alexander Crown</h6>
                            </div>
                            <p className="reviews__text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                                dignissimos sint quo commodi corrupti accusantium veniam saepe
                                numquam.
                                </p>
                            <div className="reviews__rating">
                                <FaRegStar className="reviews__star reviews__star--active" />
                                <FaRegStar className="reviews__star reviews__star--active" />
                                <FaRegStar className="reviews__star reviews__star--active" />
                                <FaRegStar className="reviews__star reviews__star--active" />
                                <FaRegStar className="reviews__star reviews__star--active" />
                            </div>
                        </div>

                        <div className="reviews__card">
                            <div className="reviews__avatar">
                                <img
                                    src={require('../../assets/img/users/user-14.jpg')}
                                    alt="Christina Calum"
                                    className="reviews__avatar-img"
                                />
                                <h6 className="reviews__user">Christina Calum</h6>
                            </div>
                            <p className="reviews__text">
                                Veniam adipisci blanditiis, corporis sit magnam aperiam ad, fuga
                                reiciendis provident deleniti cumque similique itaque animi,
                                sapiente obcaecati beatae accusantium.
                                </p>
                            <div className="reviews__rating">
                                <FaRegStar className="reviews__star reviews__star--active" />
                                <FaRegStar className="reviews__star reviews__star--active" />
                                <FaRegStar className="reviews__star reviews__star--active" />
                                <FaRegStar className="reviews__star reviews__star--active" />
                                <FaRegStar className="reviews__star reviews__star--active" />
                            </div>
                        </div>

                        <div className="reviews__card">
                            <div className="reviews__avatar">
                                <img
                                    src={require('../../assets/img/users/user-15.jpg')}
                                    alt="William Lax"
                                    className="reviews__avatar-img"
                                />
                                <h6 className="reviews__user">William Lax</h6>
                            </div>
                            <p className="reviews__text">
                                Debitis, nesciunt itaque! At quis officia natus. Suscipit,
                                reprehenderit blanditiis mollitia distinctio ducimus porro tempore
                                perspiciatis sunt vel.
                                </p>
                            <div className="reviews__rating">
                                <FaRegStar className="reviews__star reviews__star--active" />
                                <FaRegStar className="reviews__star reviews__star--active" />
                                <FaRegStar className="reviews__star reviews__star--active" />
                                <FaRegStar className="reviews__star reviews__star--active" />
                                <FaRegStar className="reviews__star reviews__star--active" />
                            </div>
                        </div>

                        <div className="reviews__card">
                            <div className="reviews__avatar">
                                <img
                                    src={require('../../assets/img/users/user-6.jpg')}
                                    alt="Edwin Craig"
                                    className="reviews__avatar-img"
                                />
                                <h6 className="reviews__user">Edwin Craig</h6>
                            </div>
                            <p className="reviews__text">
                                Quaerat laborum eveniet ut aut maiores doloribus mollitia aperiam
                                quis praesentium sed inventore harum aliquam veritatis at adipisci
                                ea assumenda!
                                </p>
                            <div className="reviews__rating">
                                <FaRegStar className="reviews__star reviews__star--active" />
                                <FaRegStar className="reviews__star reviews__star--active" />
                                <FaRegStar className="reviews__star reviews__star--active" />
                                <FaRegStar className="reviews__star reviews__star--active" />
                                <FaRegStar className="reviews__star reviews__star--active" />
                            </div>
                        </div>

                        <div className="reviews__card">
                            <div className="reviews__avatar">
                                <img
                                    src={require('../../assets/img/users/user-3.jpg')}
                                    alt="Jess Aiaya"
                                    className="reviews__avatar-img"
                                />

                                <h6 className="reviews__user">Jess Aiaya</h6>
                            </div>
                            <p className="reviews__text">
                                Perferendis quo aliquid iste quas laboriosam molestias illo est
                                voluptatem odit ea. Vero placeat culpa provident dicta maiores!
                                </p>
                            <div className="reviews__rating">
                                <FaRegStar className="reviews__star reviews__star--active" />
                                <FaRegStar className="reviews__star reviews__star--active" />
                                <FaRegStar className="reviews__star reviews__star--active" />
                                <FaRegStar className="reviews__star reviews__star--active" />
                                <FaRegStar className="reviews__star reviews__star--active" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-pictures">
                    <div className="picture-box">
                        <img
                            src={require(`../../assets/img/tours/${images[0]}`)}
                            alt={`${name} 1`}
                            className="picture-box__img picture-box__img--1"
                        />
                    </div>
                    <div className="picture-box">
                        <img
                            src={require(`../../assets/img/tours/${images[1]}`)}
                            alt="The Park Camper Tour 2"
                            className="picture-box__img picture-box__img--2"
                        />
                    </div>
                    <div className="picture-box">
                        <img
                            src={require(`../../assets/img/tours/${images[2]}`)}
                            alt="The Park Camper Tour 3"
                            className="picture-box__img picture-box__img--3"
                        />
                    </div>
                </section>

                <section className="section-cta">
                    <div className="cta">
                        <div className="cta__img cta__img--logo">
                            <img
                                src={require('../../assets/img/travel-logo.png')}
                                alt="Tour payment cover1"
                                className=""
                            />
                        </div>
                        <img
                            src={require('../../assets/img/tours/tour-5-1.jpg')}
                            alt="Tour 6"
                            className="cta__img cta__img--1"
                        />
                        <img
                            src={require('../../assets/img/tours/tour-5-2.jpg')}
                            alt="Tour 6"
                            className="cta__img cta__img--2"
                        />

                        <div className="cta__content">
                            <h2 className="heading-secondary">Love it?</h2>
                            <p className="cta__text">
                                {duration} days. 1 adventure. Make it yours today!
                            </p>

                            {
                                currentUser
                                    ?
                                    <button
                                        className="btn btn--blue span-all-rows"
                                        onClick={() => this.handleBookingCheckOut()}
                                    >
                                        Book now!
                                    </button>
                                    :
                                    <Link
                                        className="btn btn--blue span-all-rows"
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
    user: state.user,
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