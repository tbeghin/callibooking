import './App.scss';

const App = () => (
  <>
    <header>
      <h1 className="title">Callibooking</h1>
      <div className="spacer" />
      <button type="button" className="icon-button">
        <span className="material-icons">person</span>
      </button>
    </header>
    <div className="content">
      <nav>
        <ul>
          <li>page 1</li>
          <li>page 2</li>
          <li>page 3</li>
          <li>page 4</li>
        </ul>
      </nav>
      <main>
        <div>Hello world !</div>
      </main>
    </div>
    <footer>Pied de page</footer>
  </>
);

export default App;
