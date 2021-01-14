import { createSelector } from 'reselect';

const selectFeatureTours = state => state.featureToursContainer;

export const selectFeatureToursSelector = createSelector(
    [selectFeatureTours],
    featureToursContainer => featureToursContainer.featureToursContent
);
