import './SearchList.scss';

export default function SearchList({ recents, onSelectSearch }) {
  return !recents ? (
    <div className="no-recent-searches">
      <p>No recent searches yet.</p>
    </div>
  ) : (
    <div className="search-list-container">
        <ul>
          {recents.map((res, idx) => {
            return (
              <li onClick={() => onSelectSearch(res)} key={idx}>
                {res}
              </li>
            );
          })}
        </ul>
    </div>
  );
}
