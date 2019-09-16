import React from 'react';
import {Route, Link} from 'react-router-dom'

import './App.css';
import Form from './components/Form';
import Results from './components/Results';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Link to="/">Home</Link>
      <Route exact path="/" render={(props) => <Form {...props} />} />
      <Route path="/results" render={(props) => <Results {...props} />} />
      </header>
    </div>
  );
}

export default App;
