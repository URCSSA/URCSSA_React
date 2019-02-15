//act as the one bridge between react world and the browser
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';


//components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
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

            <Header />

                <Route exact path = '/' component={Homepage} />
                <Route exact path = '/About' component={About} />
<<<<<<< HEAD
                <Route path = '/information' component={Information} />
                <Route exact path = '/Activities' component={Activities} />
=======
                <Route exact path = '/Information' component={Information} />
                <Route /*exact*/ path = '/Activities' component={Activities} />
>>>>>>> e5b6abbc68bc1861fae95b1473dcd9bd90280a50
                <Route exact path = '/Contact' component={Contact} />

            <Footer />

      </div>

      </Router>
    );
  }
}

export default App;
