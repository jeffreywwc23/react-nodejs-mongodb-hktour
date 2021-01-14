import { createSelector } from 'reselect';

const selectServices = state => state.servicesContainer;

export const selectServicesSelector = createSelector(
    [selectServices],
    servicesContainer => servicesContainer.servicesContent
);
