import React, { Fragment } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Container } from 'reactstrap';
import './App.css';
import HomeIndex from './components/home/index';
import QuizIndex from './components/quiz/index';
import ResultsIndex from './components/results/index';

function App() {
  return (
    <Router>
      <Fragment>
        <Route exact path="/">
          <Container className="text-center mt-5">
            <HomeIndex />
          </Container>
        </Route>
        <Route exact path="/quiz">
          <Container className="text-center mt-5">
            <QuizIndex />
          </Container>
        </Route>
        <Route exact path="/results">
          <Container className="text-center mt-5">
            <ResultsIndex />
          </Container>
        </Route>
      </Fragment>
    </Router>
  );
}

export default App;
