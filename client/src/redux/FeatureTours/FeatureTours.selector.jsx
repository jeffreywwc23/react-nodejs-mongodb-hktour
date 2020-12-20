import { createSelector } from 'reselect';

const selectFeatureTours = state => state.featureTours;

export const selectFeatureToursSelector = createSelector(
    [selectFeatureTours],
    featureTours => featureTours.featureToursContent
);
