import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Tabs, Tab, Grid, Cell} from 'react-mdl';

import actbanner from '../../Assets/images/devResources_OriginalWeb/activitiesBanner16.jpg';
import Information from "./information";

class Activities extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {

        if(this.state.activeTab === 0){
            return(<div>
                <h1>
                Upcoming Activities
            </h1>

            <p>
            <div class="googleForm">
                <iframe src='https://docs.google.com/forms/d/e/1FAIpQLScH9ReM3SJLC6f_KSebbjAKC9ETwRcyvLphViQg7eLuoealrA/viewform?embedded=true'
            width="1000" height="1300" frameborder="0" marginheight="0" marginwidth="0" />
                </div>
                </p>
                </div>)
        } else if(this.state.activeTab === 1) {
            return (<div>
                <h1>
                Past Activities
            </h1>

            <p>
            We are currently curating our past activities. Please visit later :)
        </p>
            </div>
            )

        }
    }
    render() {
        return(
            <div>
            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
        <Tab>Activities</Tab>
        <Tab>Past Activities</Tab>
        </Tabs>


        <Grid>
        <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
        </Cell>
        </Grid>


        </div>
    )
    }

}


export default Activities;
