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
import StackGrid, { transitions }  from "react-stack-grid";
import sizeMe from 'react-sizeme';
const { scaleDown } = transitions;


class Homepage extends Component {
    render() {
        const { 
            size: { 
              width
            } 
          } = this.props;

        return (
            <homepage>
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                    <div className="majorBanner">
                        <img className="bannerImg" 
                            src={homeBanner} class="img-fluid" 
                            alt="banner"
                            />
                        <div className="bannerContent">
                            <div className="large">
                                <h1>CHINESE STUDENTS AND SCHOLARS ASSOCIATION</h1>
                                </div>
                            <div className="small">
                                <h1>University of Richmond </h1>
                                </div>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>

                 <div className="container-fluid">

                 </div>

        {/* <Grid className="demo-grid-ruler">
            <Cell col={3}>
                <Link to="/About">
                    <img className="galleryImg" 
                        src={ourTeam16} 
                        class="img-circle img-responsive" 
                        alt="team"
                        />
                    </Link>
            </Cell>
            <Cell col={2}>
                <Link to="/">
                    <img className="galleryImg" 
                        src={site16} 
                        class="img-circle img-responsive"  
                        alt="site"
                        />
                </Link>
                </Cell>
            <Cell col={4}>
                <Link to="Information">
                    <img className="galleryImg" 
                        src={handBook} 
                        class="img-circle img-responsive" 
                        alt="handbook"
                        />
                    </Link>
                </Cell>
            </Grid> */}
        <StackGrid 
            appear={scaleDown.appear}
            appeared={scaleDown.appeared}
            enter={scaleDown.enter}
            entered={scaleDown.entered}
            leaved={scaleDown.leaved}
            columnWidth={width <= 768 ? '100%' : '33.33%'}>
            {/* <Link to="/About">
                    <img className="galleryImg" 
                        src={ourTeam16} 
                        class="img-circle img-responsive" 
                        alt="team"
                        />
                </Link> */}
            
            <Link to="/">
                <img className="galleryImg" 
                    src={site16} 
                    class="img-circle img-responsive"  
                    alt="site"
                    />
            </Link>

            <Link to="Information">
                <img className="galleryImg" 
                    src={handBook} 
                    class="img-circle img-responsive" 
                    alt="handbook"
                    />
                </Link>
        </StackGrid>

            </homepage>
    );
    }
}

//export default Homepage;
export default sizeMe()(Homepage);