
import './RecentSearches.scss'
import SearchList from './SearchList'
import { HistoryOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { selectSearch } from '../../store/actions/userActions';


function _RecentSearches({recents, selectSearch}) {
  const splicedRecents = [...recents].reverse().slice(0,5)

  return (
    <div className="recent-searches-container">
      <div className="title"><HistoryOutlined /> Recent Searches</div>
      <SearchList recents={splicedRecents} onSelectSearch={selectSearch} />
    </div>
  );
}


const mapDispatchToProps = {
  selectSearch
};

export default connect(null, mapDispatchToProps)(_RecentSearches);
