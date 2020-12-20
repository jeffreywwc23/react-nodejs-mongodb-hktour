import React from 'react';
import './Services.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectServicesSelector } from '../../redux/Services/Services.selector';

function Services({ servicesContent }) {
    return (
        <section className="services-container">
            <div className="services-wrapper">
                <div className="services-heading">
                    <h1><span>Ser</span>vices</h1>
                    <p >We provide the best in class services for our customers</p>
                </div>

                <div className="services-box-container">
                    {
                        servicesContent.map((singleService) => {
                            return (
                                <div className="services-box" key={singleService.id}>
                                    <div className="bar"></div>
                                    <img src={singleService.imageUrl} alt={singleService.title}></img>
                                    <h1 data-title={singleService.title} className="fill-text">{singleService.title}</h1>
                                    <p>{singleService.text}</p>
                                    <Link to="/" className="services-btn">More</Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
};

const mapStateToProps = createStructuredSelector({
    servicesContent: selectServicesSelector
});

export default connect(mapStateToProps)(Services);