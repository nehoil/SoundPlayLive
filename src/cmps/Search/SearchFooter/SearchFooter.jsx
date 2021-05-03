
import { AppstoreOutlined, OrderedListOutlined, RightOutlined } from '@ant-design/icons';
import './SearchFooter.scss'

export default function SearchFooter({onNext, onChangeResultView}) {

  return (
    <div className="search-footer-container">
      <div className="next-btn" onClick={onNext}>Next <RightOutlined /></div>
      <div className="view-btns">
      <div className="list-btn" onClick={()=>onChangeResultView('list')}><OrderedListOutlined /></div>
      <div className="grid-btn" onClick={()=>onChangeResultView('grid')}><AppstoreOutlined /></div>
      </div>
    </div>
  );
}