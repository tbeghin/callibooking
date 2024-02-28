import './App.scss';
import { HashRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import Header from './Header';
import NavigationBar from './NavigationBar';

const App = ({ initialRoute }: { initialRoute: string }) => (
  <>
    <Header />
    <div className="content">
      <NavigationBar />
      <main>
        <Router>
          <Routes initialRoute={initialRoute} />
        </Router>
      </main>
    </div>
    <footer>Pied de page</footer>
  </>
);

export default App;
