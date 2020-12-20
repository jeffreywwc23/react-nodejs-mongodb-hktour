import React from 'react';
import { Link } from "react-router-dom";

import './OverviewCards.css'

import Date from '../Date/Date';
import { IoMdMap, IoIosCalendar, IoIosPin, IoIosPerson } from 'react-icons/io';

function OverviewCards({ ...item }) {
    const { _id, name, imageCover, subheading, summary, startLocation, startDates, locations, maxGroupSize, price, ratingsAverage, ratingsQuantity } = item;

    return (
        <div className="card">
            <div className="card__header">
                <div className="card__picture">
                    <div className="card__picture-overlay">&nbsp;</div>
                    <img
                        src={require(`../../assets/img/tours/${imageCover}`)}
                        alt="Tour 1"
                        className="card__picture-img"
                    />
                </div>

                <h3 className="card-heading">
                    <span>{name}</span>
                </h3>
            </div>

            <div className="card__details">
                <h4 className="card__sub-heading">{subheading}</h4>
                <p className="card__text">
                    {summary}
                </p>
                <div className="card__data">
                    <IoMdMap className="card__icon" />
                    <span>{startLocation.description}</span>
                </div>
                <div className="card__data">
                    <IoIosCalendar className="card__icon" />
                    <span>
                        <Date startDates={startDates[0]} />
                    </span>
                </div>
                <div className="card__data">
                    <IoIosPin className="card__icon" />
                    <span>{locations.length} stops</span>
                </div>
                <div className="card__data">
                    <IoIosPerson className="card__icon" />
                    <span>{maxGroupSize}</span>
                </div>
            </div>

            <div className="card__footer">
                <p>
                    <span className="card__footer-value">${price}</span>
                    <span className="card__footer-text">per person</span>
                </p>
                <p className="card__ratings">
                    <span className="card__footer-value">{ratingsAverage}</span>
                    <span className="card__footer-text">{`rating (${ratingsQuantity})`}</span>
                </p>
                <Link
                    className="btn btn--small"
                    params={{
                        _id: _id
                    }}
                    to={`/tours/${_id}`}
                >
                    Details
                </Link>
            </div>
        </div>
    )
};

export default OverviewCards;
