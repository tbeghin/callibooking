import { Constants } from './constants';
import './ShowList.scss';

const ShowList = () => (
  <div className="card-list">
    <div className="card test">
      <h3 className="title">Spectacle 1</h3>
      <div>content</div>
      <div>
        <button type="button">{Constants.BOOKING}</button>
        <button type="button">{Constants.VIEW}</button>
      </div>
    </div>
  </div>
);

export default ShowList;
