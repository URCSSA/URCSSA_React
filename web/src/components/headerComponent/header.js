import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';


import logo from '../../Assets/images/logo/black.jpeg';

class HeaderLocal extends Component {
    render() {
        return (
            <headerLocal>

            <Layout>
                <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Home</Link>} scroll>
                    <Navigation>
                        <Link to="/About">About</Link>
                        <Link to="/Information">Information</Link>
                        <Link to="/Activities">Activities</Link>
                        <Link to="/Contact">Contact Us</Link>
                    </Navigation>
        <img src={logo} alt="Responsive image" className="logo"/>

            </Header>
                <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Home</Link>}>
                    <Navigation>
                        <Link to="/About">About</Link>
                        <Link to="/Information">Information</Link>
                        <Link to="/Activities">Activities</Link>
                        <Link to="/Contact">Contact Us</Link>
                    </Navigation>
                </Drawer>

            </Layout>

            </headerLocal>
    );
    }
}

export default HeaderLocal;
