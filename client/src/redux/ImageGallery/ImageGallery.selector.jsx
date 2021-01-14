import { createSelector } from 'reselect';

const selectImageGallery = state => state.imageGalleryContainer;

export const selectImageGallerySelector = createSelector(
    [selectImageGallery],
    imageGalleryContainer => imageGalleryContainer.imageGalleryContent
);
