import { createSelector } from 'reselect';

const selectBoxModel = state => state.boxModelContainer;

export const selectBoxModelSelector = createSelector(
    [selectBoxModel],
    boxModelContainer => boxModelContainer.boxContent
);
