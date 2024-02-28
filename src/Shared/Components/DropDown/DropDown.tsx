import './DropDown.scss';
import { TMenuDropDown } from './type';

const DropDown = ({ menuItem, openMenu, isOpen, dropdownRef }: TMenuDropDown) => (
  <div ref={dropdownRef} className="dropdown">
    <button type="button" onClick={openMenu} className="icon-button">
      <span className="material-icons">menu</span>
    </button>
    {isOpen && <div className="dropdown-content">{menuItem}</div>}
  </div>
);

export default DropDown;
