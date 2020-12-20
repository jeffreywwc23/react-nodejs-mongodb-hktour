export const INITIAL_STATE = {
    featureToursContent: [
        {
            id: 1,
            text: 'Exciting adventure in the snow with snowboarding and skiing',
            imageUrl: 'https://images7.alphacoders.com/598/thumb-1920-598158.jpg',
            label: 'Adventure'
        },
        {
            id: 2,
            text: 'Exquisite wines, scenic views, exclusive barrel tastings, and much more',
            imageUrl: 'https://www.wineroad.com/wp-content/uploads/2018/11/barrel-tasting-hero-1024x682.jpg',
            label: 'Modern'
        },
        {
            id: 3,
            text: 'Feel the majesty of the nature and enjoy the breathtaking hike',
            imageUrl: 'https://gynq24frae0toxfhwxxdjuk5j12x-wpengine.netdna-ssl.com/wp-content/uploads/2018/08/hiker-918704_1920_optimized-768x512@2x.jpg',
            label: 'Mystery'
        },
        {
            id: 4,
            text: 'Diging into the history and ancient culture',
            imageUrl: 'https://www.redbrick.me/wp-content/uploads/2019/01/sorasak-252182-unsplash.jpg',
            label: 'Cultural'
        },
        {
            id: 5,
            text: 'The most remote and stunningly beautiful places for seeing the night sky',
            imageUrl: 'https://cherrywalnut.files.wordpress.com/2013/02/lijahhanley.jpg',
            label: 'Leisure'
        },
    ]
};

const featureToursReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default featureToursReducer;
