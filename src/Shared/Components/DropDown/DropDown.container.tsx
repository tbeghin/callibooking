import { useRef } from 'react';
import DropDown from './DropDown';
import { TMenuDropDownContainer } from './type';
import { useIsOpenMenu } from './dropDown.hook';

const DropDownContainer = ({ menuItem }: TMenuDropDownContainer) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { isOpen, setIsOpen } = useIsOpenMenu(dropdownRef);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  return <DropDown menuItem={menuItem} dropdownRef={dropdownRef} isOpen={isOpen} openMenu={openMenu} />;
};

export default DropDownContainer;
