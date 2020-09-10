import Action from "./action";

const initialState = {
    /**
     * ======= Common usage =======
     */
    isLoading: false,
    toastMessage: '',
    opacityScreen: false,
    showSharePopup: null,

    /**
     * ======= Photos =======
     */
    recentPhotos: [],
    selectedPhoto: null,
    randomPhotos: [],
    relatedPhotos: [],

    /**
     * ======= Search =======
     */
    keyword: null,
    searchResult: null,
    searchPhotos: [],
    searchCollections: [],
    searchUsers: [],

    /**
     * ======= Collections =======
     */
    collections: null,
    collectionById: null,
    collectionPhotos: [],

    /**
     * ======= Users =======
     */
    userProfile: null,
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
            case Action.Types.UPDATE_STATE: {
            return {
                ...state,
                ...action.payload
            }
        }
    }
};

export default reducer;