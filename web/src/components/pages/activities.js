import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

import actbanner from '../../Assets/images/pic/activitiesBanner16.jpg';

import ActColumn from '../columnComponent/actColumn';

class Activities extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="banner">
                    <img src={actbanner} class="img-fluid" alt="Responsive image"/>
                </div>

                <div className="actColumn">
                    <nav>
                        <ul>
                            <li>
                                <Link to="/Activities">Upcoming Activities</Link>
                            </li>
                            <li>
                            
                            </li>
                        </ul>
                    </nav>
                </div>



                //<ActColumn />



                <h1>
                    Upcoming Activities

                </h1>

                <p>
                    Activities
                    Past activities


                </p>



        </div>
    );
    }
}

export default Activities;
