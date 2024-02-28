import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import ROUTE_URL, { Constants } from '../Routes/constants';
import Header from './Header';

const HeaderContainer = () => {
  const items = [
    { key: 'show list', title: Constants.SHOW_LIST_TITLE, url: ROUTE_URL.SHOW_LIST_URL },
    { key: 'piece manage', title: Constants.PIECE_MANAGE_TITLE, url: ROUTE_URL.PIECE_MANAGE_URL },
  ];
  const navigate = useNavigate();
  const navigateFn = useCallback((url: string) => navigate(url), [navigate]);

  return <Header items={items} navigate={navigateFn} />;
};

export default HeaderContainer;
