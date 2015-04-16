import React from 'react';
import Router from 'react-router';

const Link = Router.Link;
const RouteHandler = Router.RouteHandler;

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <ul>
            <li><Link to="app">Home</Link></li>
            <li><Link to="about">About</Link></li>
          </ul>
        </header>

        <RouteHandler />
      </div>
    )
  }
}

export default App;
