import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Tienda oficial de la Asociación del Fútbol Argentino
        </p>
        <a
          className="App-link"
          href="https://www.afa.com.ar/es/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visita nuestro sitio oficial
        </a>
      </header>
    </div>
  );
}

export default App;
