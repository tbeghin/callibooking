import './App.scss';
import { HashRouter as Router } from 'react-router-dom';
import Routes from './Routes';

const App = ({ initialRoute }: { initialRoute: string }) => (
  <Router>
    <Routes initialRoute={initialRoute} />
  </Router>
);

export default App;
