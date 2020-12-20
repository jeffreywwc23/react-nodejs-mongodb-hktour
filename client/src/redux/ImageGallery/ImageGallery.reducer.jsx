export const INITIAL_STATE = {
    imageGalleryContent: [
        {
            id: 1,
            title: 'tour',
            imageUrl: 'https://theinnbox.co/images/busan/00.jpg',
            label: 'at a affordable price',
            hoverLabel: 'with excellent package',
        },
        {
            id: 2,
            title: 'entertainment',
            imageUrl: 'https://i.pinimg.com/originals/c4/95/52/c495522db4d2a6e5034e4288de7112ed.jpg',
            label: 'once-in-a-lifetime',
            hoverLabel: 'create the unforgettable memory',
        },
        {
            id: 3,
            title: 'experience',
            imageUrl: 'https://i.ytimg.com/vi/BgCg4Fi-AVU/maxresdefault.jpg',
            label: 'engaging',
            hoverLabel: 'immersive',
        }
    ]
};

const imageGalleryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default imageGalleryReducer;
