import { storageService } from "./StorageService"
import HttpService from './HttpService';

const STORAGE_KEY = 'user_db'
const CLIEND_ID = 'ggX0UomnLs0VmW7qZnCzw'
var loggedInUser = storageService.load(STORAGE_KEY) || getEmptyUser()

export default {
  getUser,
  updateUser,
  getSearchResults,
  getNextSearchResults,
  getEmptyUser
};

async function getSearchResults(term) {
  const res = await HttpService.get(`https://api.soundcloud.com/tracks?client_id=${CLIEND_ID}&q=${term}&access=playable&limit=6&linked_partitioning=true/`);
  return {
    searchResults: res.collection,
    nextListLink: res.next_href
  };
}

async function getNextSearchResults(link) {
  const res = await HttpService.get(link);
  return {
    searchResults: res.collection,
    nextListLink: res.next_href
  };
}

function updateUser(user) {
  loggedInUser = user;
  storageService.store(STORAGE_KEY, loggedInUser)
}


function getUser() {
  return loggedInUser;
}


function getEmptyUser() {
  return {
    recentSearches: [],
    searchResults: [],
    currSong: {
      title: 'Pixies - Hey',
      url: 'https://soundcloud.com/thedeadyetis/hey-pixies',
      img: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Pixies-Doolittle.jpg/220px-Pixies-Doolittle.jpg'
    },
    nextListLink: '',
    currSearchTerm: '',
    resultView: 'list'
  }
}