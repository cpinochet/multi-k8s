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
          <img src="https://scontent.fscl6-1.fna.fbcdn.net/v/t1.6435-9/61214228_10218301286061644_4596777611417354240_n.jpg?_nc_cat=106&amp;ccb=1-5&amp;_nc_sid=730e14&amp;_nc_eui2=AeEdnVzWgxk_nSP1uX3ybYNfy8nO35gtrbnLyc7fmC2tuTfGBug7g0p5AvzhwOvXaK8&amp;_nc_ohc=RaTJehP4a6QAX_Bgfx2&amp;_nc_ht=scontent.fscl6-1.fna&amp;oh=29de6df9ce7ddfedc0311b2c13b486d0&amp;oe=61908536" width="400" height="400" />
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
