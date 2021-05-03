import userService from '../../services/UserService';

const _setUser = (user) => ({ type: 'SET_USER', user });

export function loadData() {
  return (dispatch) => {
    const user = userService.getUser();
    dispatch(_setUser(user));
  };
}

export function doSearch(term) {
  return async (dispatch, getState) => {
    const oldUser = getState().userReducer.user;
    const { searchResults, nextListLink } = await userService.getSearchResults(
      term
    );
    const user = {
      ...oldUser,
      searchResults,
      nextListLink,
      recentSearches: [...oldUser.recentSearches, term],
    };
    dispatch(_setUser(user));
    userService.updateUser(user);
  };
}

export function selectSong(song) {
  return async (dispatch, getState) => {
    const { title, permalink_url: url, artwork_url: img, description } = song;
    const oldUser = getState().userReducer.user;
    const user = {
      ...oldUser,
      currSong: {
        title,
        url,
        img,
        description,
      },
    };
    dispatch(_setUser(user));
    userService.updateUser(user);
  };
}

export function selectSearch(term) {
  return async (dispatch, getState) => {
    const { searchResults, nextListLink } = await userService.getSearchResults(
      term
    );
    const oldUser = getState().userReducer.user;
    const user = {
      ...oldUser,
      currSearchTerm: term,
      searchResults,
      nextListLink,
    };
    dispatch(_setUser(user));
    userService.updateUser(user);
  };
}

export function loadNextList() {
  return async (dispatch, getState) => {
    const oldUser = getState().userReducer.user;
    const {
      searchResults,
      nextListLink,
    } = await userService.getNextSearchResults(oldUser.nextListLink);
    const user = {
      ...oldUser,
      searchResults,
      nextListLink,
    };
    dispatch(_setUser(user));
    userService.updateUser(user);
  };
}

export function selectResultView(method) {
  return async (dispatch, getState) => {
    const oldUser = getState().userReducer.user;
    const user = {
      ...oldUser,
      resultView: method,
    };
    dispatch(_setUser(user));
    userService.updateUser(user);
  };
}
