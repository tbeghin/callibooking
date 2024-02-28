import DropDown from 'Shared/Components/DropDown';
import { Constants } from './constants';
import './Header.scss';
import { THeader } from './type';

const Header = ({ items }: THeader) => (
  <header>
    <h1 className="title">{Constants.TITLE}</h1>
    <div className="flex action">
      <DropDown
        menuItem={items.map((item: string) => (
          <a href="#toto" key={item}>
            {item}
          </a>
        ))}
      />
      <button type="button" className="icon-button">
        <span className="material-icons">person</span>
      </button>
    </div>
  </header>
);

export default Header;
