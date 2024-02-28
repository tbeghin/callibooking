import DropDown from 'Shared/Components/DropDown';
import { Constants } from './constants';
import './Header.scss';
import { THeader, TItem } from './type';

const Header = ({ items, navigate }: THeader) => (
  <header>
    <h1 className="title">{Constants.TITLE}</h1>
    <div className="flex action">
      <DropDown
        menuItem={items.map((item: TItem) => (
          <div onClick={() => navigate(item.url)} key={item.key}>
            {item.title}
          </div>
        ))}
      />
      <button type="button" className="icon-button">
        <span className="material-icons">person</span>
      </button>
    </div>
  </header>
);

export default Header;
