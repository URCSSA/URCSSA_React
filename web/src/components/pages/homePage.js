import React, { Component } from 'react';

import homeBanner from '../../Assets/images/devResources_OriginalWeb/homeBannerWords.jpg';
import ourTeam16 from '../../Assets/images/devResources_OriginalWeb/ourTeam16.jpg';
import site16 from '../../Assets/images/devResources_OriginalWeb/siteRelease.jpg';
import handBook from '../../Assets/images/devResources_OriginalWeb/handbookMockup.jpg';
import weWantYou from '../../Assets/images/devResources_OriginalWeb/indexWeWantYou.jpg';
import voiceofva from '../../Assets/images/devResources_OriginalWeb/voiceofva.jpg';
import temp from '../../Assets/images/devResources_OriginalWeb/indexTemp.jpg';
import {Link} from "react-router-dom";
import { Layout, Header, Navigation, Drawer, Content, Grid, Cell } from 'react-mdl';



class Homepage extends Component {
    render() {
        return (
            <homepage>
            <div style={{width: '100%', margin: 'auto'}}>
            <Grid className="landing-grid">
            <Cell col={12}>
            </Cell>
            <div className="majorBanner">
            <img className="bannerImg" src={homeBanner} class="img-fluid" alt="banner"/>
            <div className="bannerContent">
            <div className="large">
            CHINESE STUDENTS AND SCHOLARS ASSOCIATION
        </div>
        <div className="small">University of Richmond </div>
        </div>
        </div>
            </Grid>
            </div>

                // <div className="container-fluid">

                // </div>

        <Grid className="demo-grid-ruler">
            <Cell col={4}>
                <Link to="/About"><img className="galleryImg" src={ourTeam16} class="img-circle img-responsive" alt="team"/>
                    </Link>
            </Cell>
            <Cell col={4}>
                <Link to="/"><img className="galleryImg" src={site16} class="img-circle img-responsive"  alt="site"/></Link>
            </Cell>
            <Cell col={4}>
                <Link to="Information"><img className="galleryImg" src={handBook} class="img-circle img-responsive" alt="handbook"/></Link>
            </Cell>
            </Grid>


            </homepage>
    );
    }
}

export default Homepage;
