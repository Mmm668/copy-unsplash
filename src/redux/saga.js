import {all, put, call, takeLatest, select, delay, spawn} from 'redux-saga/effects'
import Action from './action';
import api from './api'

export default function* () {

    /**
     * ======= Common usage =======
     */
    const isLoading = function*(status){
        yield put(Action.Creators.updateState({
            isLoading: status
        }));
    };

    const toastMessage = function* (message, duration) {
        yield put(Action.Creators.updateState({
            toastMessage: message
        }));
        yield spawn(function* () {
            yield delay(duration);
            yield put(Action.Creators.updateState({
                toastMessage: ''
            }));
        })
    };


    /**
     * ======= Photos =======
     */
    yield takeLatest(Action.Types.FETCH_PHOTOS, function* () {
        yield isLoading(true);
        const result = yield call(api.fetchPhotos);
        console.log(`[saga] [fetchPhotos]`, result);
        yield put(Action.Creators.updateState({recentPhotos: result.data}));
        yield isLoading(false);
        yield toastMessage('로드가 완료되었습니다.', 2000);
    });

    yield takeLatest(Action.Types.FETCH_RANDOM_PHOTOS, function* () {
        yield isLoading(true);
        const result = yield call(api.fetchRandomPhotos);
        console.log(`[saga] [fetchRandomPhotos]`, result.data);

        yield put(Action.Creators.updateState({randomPhotos: result.data}))
        yield isLoading(false);
    });

    yield takeLatest(Action.Types.FETCH_RELATED_PHOTOS, function* (action) {
        yield isLoading(true);
        const result = yield call(api.fetchRelatedPhotos, action.payload);
        console.log(`[saga] [fetchRelatedPhotos]`, result.data.results);

        yield put(Action.Creators.updateState({relatedPhotos: result.data.results, keyword: action.payload}));
        yield isLoading(false);
    });


    /**
     * ======= Search =======
     */
    yield takeLatest(Action.Types.FETCH_SEARCH, function* (action) {
        yield isLoading(true);
        const result = yield call(api.fetchSearch, action.payload);
        console.log(`[saga] [fetchSearch]`, result.data);

        yield put(Action.Creators.updateState({searchResult: result.data, keyword: action.payload}));
        yield isLoading(false);
    });

    yield takeLatest(Action.Types.FETCH_SEARCH_PHOTOS, function* (action) {
        yield isLoading(true);
        const result = yield call(api.fetchSearchPhotos, action.payload);
        console.log(`[saga] [fetchSearchPhotos]`, result.data);

        yield put(Action.Creators.updateState({searchPhotos: result.data, keyword: action.payload}));
        yield isLoading(false);
    });

    yield takeLatest(Action.Types.FETCH_SEARCH_COLLECTIONS, function* (action) {
        yield isLoading(true);
        const result = yield call(api.fetchSearchCollections, action.payload);
        console.log(`[saga] [fetchSearchCollections]`, result.data);

        yield put(Action.Creators.updateState({searchCollections: result.data, keyword: action.payload}));
        yield isLoading(false);
    });

    yield takeLatest(Action.Types.FETCH_SEARCH_USERS, function* (action) {
        yield isLoading(true);
        const result = yield call(api.fetchSearchUsers, action.payload);
        console.log(`[saga] [fetchSearchUsers]`, result.data);

        yield put(Action.Creators.updateState({searchUsers: result.data, keyword: action.payload}));
        yield isLoading(false);
    });


    /**
     * ======= Collections =======
     */
    yield takeLatest(Action.Types.FETCH_COLLECTIONS, function* () {
        yield isLoading(true);
        const result = yield call(api.fetchCollections);
        console.log(`[saga] [fetchCollections]`, result.data);

        yield put(Action.Creators.updateState({collections: result.data}));
        yield isLoading(false);
    });

    yield takeLatest(Action.Types.FETCH_COLLECTION_BY_ID, function* (action) {
        const result = yield call(api.fetchCollectionById, action.payload);
        console.log(`[saga] [fetchCollectionById]`, result.data);

        yield put(Action.Creators.updateState({collectionById: result.data}))
    });

    yield takeLatest(Action.Types.FETCH_COLLECTION_PHOTOS, function* (action) {
        yield isLoading(true);
        const result = yield call(api.fetchCollectionPhotos, action.payload);
        console.log(`[saga] [fetchCollectionPhotos]`, result.data);

        yield put(Action.Creators.updateState({collectionPhotos: result.data}))
        yield isLoading(false);
    });


    /**
     * ======= User =======
     */
    yield takeLatest(Action.Types.FETCH_USER_PROFILE, function* () {
        yield isLoading(true);
        const result = yield call(api.fetchUserProfile);
        console.log(`[saga] [fetchUserProfile]`, result.data);
        yield put(Action.Creators.updateState({userProfile: result.data}));
        yield isLoading(false);
    });
}
