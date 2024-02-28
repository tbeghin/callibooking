import { ReactNode, RefObject } from 'react';

export type TMenuDropDownContainer = {
  menuItem: ReactNode;
};

export type TMenuDropDown = TMenuDropDownContainer & {
  isOpen: boolean;
  openMenu: () => void;
  dropdownRef: RefObject<HTMLDivElement>;
};
