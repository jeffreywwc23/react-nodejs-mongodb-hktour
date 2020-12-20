import React from 'react';
import './FeatureTours.css';
import FeatureTourItem from './FeatureTourItem/FeatureTourItem';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectFeatureToursSelector } from '../../redux/FeatureTours/FeatureTours.selector';

function FeatureTours({ featureToursContent }) {
    const featureToursContentFirstTwo = [...featureToursContent].splice(0, 2);
    const featureToursContentRest = [...featureToursContent].splice(2, 4);

    return (
        <div className='feature-tours'>
            <h1>Check Out Our Featured Tours</h1>
            <div className='feature-tours-container'>
                <div className='feature-tours-wrapper'>
                    <ul className='feature-tours-items'>
                        {
                            featureToursContentFirstTwo.map((tour) => {
                                return (
                                    <FeatureTourItem
                                        key={tour.id}
                                        src={tour.imageUrl}
                                        text={tour.text}
                                        label={tour.label}
                                        path="/tours"
                                    />
                                )
                            })
                        }
                    </ul>
                    <ul className='feature-tours-items'>
                        {
                            featureToursContentRest.map((tour) => {
                                return (
                                    <FeatureTourItem
                                        key={tour.id}
                                        src={tour.imageUrl}
                                        text={tour.text}
                                        label={tour.label}
                                        path="/tours"
                                    />
                                )
                            })
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};


const mapStateToProps = createStructuredSelector({
    featureToursContent: selectFeatureToursSelector
});

export default React.memo(connect(mapStateToProps)(FeatureTours));