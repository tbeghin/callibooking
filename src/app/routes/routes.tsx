import { Navigate, Route, Routes } from 'react-router-dom';
import ShowListContainer from 'Pages/ShowList';
import PieceManageContainer from '../../Pages/PieceManage';
import Layout from '../Layout/Layout';
import ROUTE_URL, { Constants } from './constants';

type TRoutesCmpt = {
  initialRoute: string;
  ShowListCmt?: typeof ShowListContainer;
  PieceManageCmt?: typeof PieceManageContainer;
};

const RoutesCmpt = ({
                      initialRoute,
                      ShowListCmt = ShowListContainer,
                      PieceManageCmt = PieceManageContainer
                    }: TRoutesCmpt) => (
  <Routes>
    <Route
      path={ROUTE_URL.SHOW_LIST_URL}
      element={
        <Layout>
          <div className="container">
            <h2 className="title">{Constants.SHOW_LIST_TITLE}</h2>
            <ShowListCmt />
          </div>
        </Layout>
      }
    />
    <Route
      path={ROUTE_URL.PIECE_MANAGE_URL}
      element={
        <Layout>
          <div className="container">
            <h2 className="title">{Constants.PIECE_MANAGE_TITLE}</h2>
            <PieceManageCmt />
          </div>
        </Layout>
      }
    />
    <Route path="/" element={<Navigate to={initialRoute} />} />
  </Routes>
);

export default RoutesCmpt;
