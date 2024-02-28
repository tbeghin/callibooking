import { RefObject, useEffect, useState } from 'react';

export const useIsOpenMenu = (dropdownRef: RefObject<HTMLDivElement>) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (!dropdownRef.current?.contains(e.target as HTMLElement)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener('click', close);
    }
    return () => {
      window.removeEventListener('click', close);
    };
  }, [dropdownRef, isOpen]);

  return { isOpen, setIsOpen };
};
