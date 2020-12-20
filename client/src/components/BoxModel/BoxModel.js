import React from 'react';
import './BoxModel.css';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectBoxModelSelector } from '../../redux/BoxModel/BoxModel.selector';


function BoxModel({ boxContent }) {
    return (
        <section className="box-wrapper">
            <div className="box-container">

                {
                    boxContent.map((boxCard) => {
                        return (
                            <div className="card" key={boxCard.id}>
                                <div className="imgBox">
                                    <img src={boxCard.imageUrl} alt={boxCard.title} />
                                </div>
                                <div className="content">
                                    <div>
                                        <span className="color-text">{boxCard.title}</span>
                                        <p>{boxCard.label}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

const mapStateToProps = createStructuredSelector({
    boxContent: selectBoxModelSelector
});

export default connect(mapStateToProps)(BoxModel);