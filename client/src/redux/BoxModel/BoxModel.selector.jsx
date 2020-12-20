import { createSelector } from 'reselect';

const selectBoxModel = state => state.boxModel;

export const selectBoxModelSelector = createSelector(
    [selectBoxModel],
    boxModel => boxModel.boxContent
);
