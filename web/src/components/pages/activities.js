import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import actbanner from '../../Assets/images/pic/activitiesBanner16.jpg';

function UpcomingActivities() {
  return (
    <div>
      <h1>
        Upcoming Activities
      </h1>

      <p>
        <div class="googleForm">
          <iframe src='https://docs.google.com/forms/d/e/1FAIpQLScH9ReM3SJLC6f_KSebbjAKC9ETwRcyvLphViQg7eLuoealrA/viewform?embedded=true' 
            width="1000" height="1300" frameborder="0" marginheight="0" marginwidth="0" /> 
        </div>
      </p>
    </div>
  );
}

function PastActivities() {
  return (
    <div>
      <h1>
        Past Activities
      </h1>

      <p>
        We are currently curating our past activities. Please visit later :)
      </p>
    </div>
  );
}

class Activities extends Component {
  render() {
    return (
      <Router>
      <div className="container-fluid">
        <div className="banner">
          <img src={actbanner} class="img-fluid" alt="Responsive image"/>
        </div>

          <ul>
            <li>
              <Link to='/Activities'>Upcoming Activities</Link>
            </li>

            <li>
              <Link to='/Activities/PastActivities'>Past Activities</Link>
            </li>
          </ul>

        <hr />

        <Route exact path = "/Activities" component={UpcomingActivities} />
        <Route path = "/Activities/PastActivities" component={PastActivities} />
      </div>
      </Router>
    );
  }
}

export default Activities;
