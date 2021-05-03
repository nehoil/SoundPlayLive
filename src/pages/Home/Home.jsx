import './Home.scss';
import { useSelector } from 'react-redux';
import Search from '../../cmps/Search';
import Player from '../../cmps/Player';
import RecentSearches from '../../cmps/RecentSearches';

export default function Home() {
  const user = useSelector(state => state.userReducer.user)
  return (
    <div className="home-container">
      <div className="home-content-container container">
        <Search currSearchTerm={user.currSearchTerm} />
        <Player song={user.currSong} />
        <RecentSearches recents={user.recentSearches} />
      </div>
    </div>
  );
}