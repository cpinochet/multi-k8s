import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src="https://photos.google.com/share/AF1QipPjazjV2ieZK0vkrDJIUmT_n7HRer5NbbOMj0k_l5OBpNObUp00_bRx59jhyKUi2w/photo/AF1QipPg4Yg6ZwQX6w-XFmGRYb2tk6udx2hDn8BBtCyu?key=bDR5UTl3RmVheVpjUXd3bUVaVzZGOWlqbUd3U25n" /> 
          <h3>Yandi, la gata.</h3>
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React 3
          </a>
          <Link to="/">Home</Link>
          <Link to="/otherpage">Other Page</Link>
        </header>
        <div>
          <Route exact path="/" component={Fib} />
          <Route path="/otherpage" component={OtherPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
