import FetchHelper from "../helpers/FetchHelper";

const api = {
  /**
   * ======= Photos =======
   */
  fetchPhotos: () => FetchHelper.fetchJsonGet('/photos'),
  fetchRandomPhotos: () => FetchHelper.fetchJsonGet('/photos/random/?count=30'),
  fetchRelatedPhotos: keyword => FetchHelper.fetchJsonGet(`/search/photos?=page=1&query=${keyword}`),


  /**
   * ======= Search =======
   */
  fetchSearch: keyword => FetchHelper.fetchJsonGet(`/search?page=1&query=${keyword}`),
  fetchSearchPhotos: keyword => FetchHelper.fetchJsonGet(`/search/photos?page=1&query=${keyword}`),
  fetchSearchCollections: keyword => FetchHelper.fetchJsonGet(`/search/collections?page=1&query=${keyword}`),
  fetchSearchUsers: keyword => FetchHelper.fetchJsonGet(`/search/users?page=1&query=${keyword}`),


  /**
   * ======= Collections =======
   */
  fetchCollections: () => FetchHelper.fetchJsonGet('/collections'),
  fetchCollectionById: id => FetchHelper.fetchJsonGet(`/collections/${id}`),
  fetchCollectionPhotos: id => FetchHelper.fetchJsonGet(`/collections/${id}/photos`),


  /**
   * ======= Users =======
   */
  fetchUserProfile: username => FetchHelper.fetchJsonGet(`/users/${username}`),
  fetchUserPortfolioLink: username => FetchHelper.fetchJsonGet(`/users/${username}/portfolio`),
  fetchUserPhotos : username => FetchHelper.fetchJsonGet(`/users/${username}/photos`),
  fetchUserStatistics : id => FetchHelper.fetchJsonGet(`/photos/${id}/statistics`),

};

export default api;