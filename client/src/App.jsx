import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Container } from 'reactstrap';
import './App.css';
import HomeIndex from './components/home/index';

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Container className="text-center mt-5">
          <HomeIndex />
        </Container>
      </Route>
    </Router>
  );
}

export default App;
