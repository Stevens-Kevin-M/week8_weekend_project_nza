import React from 'react';
import ReactDOM from 'react-dom';
import {Who_We_Are, Home, What_We_Do, Where_We_Work, Contact_Us} from './components';

//Import for react routing
import  { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path='/' component={Home}>
        </Route>

        <Route path='/contact_us' component={Contact_Us}/>
        <Route path='/where_we_work' component={Where_We_Work}/>
        <Route path='/who_we_are' component={Who_We_Are}/>
        <Route path='/what_we_do' component={What_We_Do}/>

      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
