import { CaretRightOutlined, SoundOutlined } from '@ant-design/icons';
import './SearchResults.scss';
import defaultImg from '../../../assets/img/search/default.png';
export default function SearchResults({ results, resultView, onSelectSong }) {
  function getResImg(img) {
    return img ? img : defaultImg;
  }

  return !results.length ? (
    <div className="no-results">
      <p>No results yet, type something to discover new tracks</p>{' '}
      <SoundOutlined />
    </div>
  ) : (
    <div className="search-results-container">
      {resultView === 'list' ? (
        <ul>
          {results.map((res, idx) => {
            return (
              <li
                key={idx}
                onClick={() => {
                  onSelectSong(res);
                }}
              >
                <CaretRightOutlined />
                {res.title}
              </li>
            );
          })}
        </ul>
      ) : (
        <div className="grid">
          {results.map((res, idx) => {
            return (
              <div
                className="result"
                onClick={() => {
                  onSelectSong(res);
                }}
                key={idx}
              >
                <div className="image">
                  <div className="img">
                    {<img src={getResImg(res.artwork_url)} alt="" srcSet="" />}
                  </div>
                </div>
                <div className="title">{res.title}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
