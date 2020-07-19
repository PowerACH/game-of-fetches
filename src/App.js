import React from 'react';
import './App.css';
import QuestionOne from './Components/Question1'
import QuestionTwo from './Components/Question2'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/Question1">Question1</Link>
            </li>
           <li>
             <Link to="/Question2">Question2</Link>
           </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Question1">
            <QuestionOne />
          </Route>
          <Route path="/Question2">
            <QuestionTwo />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}