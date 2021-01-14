import { combineReducers } from 'redux';

import userReducer from './User/User.reducer.jsx';
import tourReducer from './Tour/Tour.reducer.jsx';
import imageGalleryReducer from './ImageGallery/ImageGallery.reducer.jsx';
import boxModelReducer from './BoxModel/BoxModel.reducer.jsx';
import featureToursReducer from './FeatureTours/FeatureTours.reducer.jsx';
import servicesReducer from './Services/Services.reducer.jsx';

const rootReducer = combineReducers({
    userContainer: userReducer,
    tourContainer: tourReducer,
    imageGalleryContainer: imageGalleryReducer,
    boxModelContainer: boxModelReducer,
    featureToursContainer: featureToursReducer,
    servicesContainer: servicesReducer,
});

export default rootReducer;


