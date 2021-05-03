import './SearchBar.scss';
import { Input } from 'antd';
import { useState } from 'react';

export default function SearchBar({ onNewSearch, currSearchTerm }) {
  const [term, setTerm] = useState(currSearchTerm);
  const [isLoading, setIsLoading] = useState(false);
  const { Search } = Input;

  function setInput(vals) {
    setTerm(vals.target.value);
  }
  async function doSearch() {
    setIsLoading(true);
    await onNewSearch(term);
    setIsLoading(false);
  }
  return (
    <div className="SearchBar-main-container">
      <Search
        value={term}
        placeholder="Search track.."
        onChange={setInput}
        onSearch={doSearch}
        loading={isLoading}
      />
    </div>
  );
}
