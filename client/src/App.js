import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Realizacja zadania nr1 w ramach laboratorium PFSwCO</h1>
          <h3>Jakub Grzesiak</h3>
          <Link to="/">Strona główna</Link>
          <Link to="/otherpage">Opis działania</Link>
          <Link to="/fibonacci">Obliczanie Fib</Link>
          <Route path="/otherpage" component={OtherPage} />
          <Route path="/fibonacci" component={Fib} />
        </header>
        <div>
        </div>
      </div>
    </Router>
  );
}

export default App;
