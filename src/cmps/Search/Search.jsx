import './Search.scss';
import SearchBar from './SearchBar';
import SearchFooter from './SearchFooter';
import SearchResults from './SearchResults';
import { connect } from 'react-redux';
import { doSearch, loadNextList, selectSong, selectResultView } from '../../store/actions/userActions';

function _Search({ doSearch, loadNextList, selectSong, selectResultView, user }) {
  return (
    <div className="search-container">
      <SearchBar onNewSearch={doSearch} currSearchTerm={user.currSearchTerm} />
      <SearchResults results={user.searchResults} resultView={user.resultView} onSelectSong={selectSong} />
      <SearchFooter onNext={loadNextList} onChangeResultView={selectResultView} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
});

const mapDispatchToProps = {
  doSearch,
  loadNextList,
  selectSong,
  selectResultView
};

export default connect(mapStateToProps, mapDispatchToProps)(_Search);
