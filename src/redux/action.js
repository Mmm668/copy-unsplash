const Action = {
    Types: {
        UPDATE_STATE: 'UPDATE_STATE',

        FETCH_PHOTOS: 'FETCH_PHOTOS',
        FETCH_RANDOM_PHOTOS: 'FETCH_RANDOM_PHOTOS',
        FETCH_RELATED_PHOTOS: 'FETCH_RELATED_PHOTOS',

        FETCH_SEARCH : 'FETCH_SEARCH',
        FETCH_SEARCH_PHOTOS: 'FETCH_SEARCH_PHOTOS',
        FETCH_SEARCH_COLLECTIONS: 'FETCH_SEARCH_COLLECTIONS',
        FETCH_SEARCH_USERS: 'FETCH_SEARCH_USERS',

        FETCH_COLLECTIONS: 'FETCH_COLLECTIONS',
        FETCH_COLLECTION_BY_ID: 'FETCH_COLLECTION_BY_ID',
        FETCH_COLLECTION_PHOTOS: 'FETCH_COLLECTION_PHOTOS',

        FETCH_USER_PROFILE: 'FETCH_USER_PROFILE',
        FETCH_USER_PORTFOLIO_LINK: 'FETCH_USER_PORTFOLIO_LINK',
        FETCH_USER_PHOTOS: 'FETCH_USER_PHOTOS',
        FETCH_USER_STATISTICS: 'FETCH_USER_STATISTICS',
    },
    Creators: {
        /**
         * ======= Common usage =======
         */
        updateState: payload => ({
            type: Action.Types.UPDATE_STATE,
            payload
        }),

        /**
         * ======= Photos =======
         */
        fetchPhotos: () => ({
            type: Action.Types.FETCH_PHOTOS
        }),
        fetchRandomPhotos: () => ({
            type: Action.Types.FETCH_RANDOM_PHOTOS
        }),
        fetchRelatedPhotos: payload => ({
            type: Action.Types.FETCH_RELATED_PHOTOS,
            payload
        }),


        /**
         * ======= Search =======
         */
        fetchSearch: payload => ({
            type: Action.Types.FETCH_SEARCH,
            payload
        }),
        fetchSearchPhotos: payload => ({
            type: Action.Types.FETCH_SEARCH_PHOTOS,
            payload
        }),
        fetchSearchCollections: payload => ({
            type: Action.Types.FETCH_SEARCH_COLLECTIONS,
            payload
        }),
        fetchSearchUsers: payload => ({
            type: Action.Types.FETCH_SEARCH_USERS,
            payload
        }),

        /**
         * ======= Collections =======
         */
        fetchCollections: () => ({
            type: Action.Types.FETCH_COLLECTIONS,
        }),
        fetchCollectionById: payload => ({
            type: Action.Types.FETCH_COLLECTION_BY_ID,
            payload
        }),
        fetchCollectionPhotos: payload => ({
            type: Action.Types.FETCH_COLLECTION_PHOTOS,
            payload
        }),


        /**
         * ======= Users =======
         */
        fetchUserProfile: () => ({
            type: Action.Types.FETCH_USER_PROFILE
        }),
        fetchUserPortfolioLink: () => ({
            type: Action.Types.FETCH_USER_PORTFOLIOLINK
        }),
        fetchUserPhotos: () => ({
            type: Action.Types.FETCH_USER_PHOTOS
        }),
        fetchUserStatistics: () => ({
            type: Action.Types.FETCH_USER_STASTICS
        }),

    }
};

export default Action;