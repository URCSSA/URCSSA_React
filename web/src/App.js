//act as the one bridge between react world and the browser
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';



//components
import HeaderLocal from './components/headerComponent/header';
import FooterLocal from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';
import About from './components/pages/about';
import Information from './components/pages/information';
import Activities from './components/pages/activities';
import Contact from './components/pages/contact';


//include
import './Assets/css/default.min.css';

//import logo from './Assets/images/logo.jpeg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

            <HeaderLocal/>

                <Route exact path = '/' component={Homepage} />
                <Route exact path = '/About' component={About} />
                <Route path = '/Information' component={Information} />
                <Route exact path = '/Activities' component={Activities} />
                <Route exact path = '/Contact' component={Contact} />

            <FooterLocal/>

      </div>

      </Router>
    );
  }
}

export default App;
