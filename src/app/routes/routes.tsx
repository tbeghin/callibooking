import { Navigate, Route, Routes } from 'react-router-dom';
import ShowListContainer from 'Pages/ShowList';
import ROUTE_URL, { Constants } from './constants';

type TRoutesCmpt = {
  initialRoute: string;
  ShowListCmt?: typeof ShowListContainer;
};

const RoutesCmpt = ({ initialRoute, ShowListCmt = ShowListContainer }: TRoutesCmpt) => (
  <Routes>
    <Route path="/" element={<Navigate to={initialRoute} />} />
    <Route
      path={ROUTE_URL.SHOW_LIST_URL}
      element={
        <div className="container">
          <h2 className="title">{Constants.SHOW_LIST_TITLE}</h2>
          <ShowListCmt />
        </div>
      }
    />
  </Routes>
);

export default RoutesCmpt;
