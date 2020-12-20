import { createSelector } from 'reselect';

const selectServices = state => state.services;

export const selectServicesSelector = createSelector(
    [selectServices],
    services => services.servicesContent
);
