import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import { Tabs, Tab, Grid, Cell, Navigation} from 'react-mdl';



class Information extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {

        if(this.state.activeTab === 0){
            return (

                <div className="resources">

                <Navigation>
                    <p>
                        Welcome to University of Richmond! URCSSA gathered all kinds of information that will make your life here in Richmond easier.
                        Here's some of them. Hope you find them useful.
                    </p>
                </Navigation>

                <Navigation>
                    <p>
                        <a href="http://newspiders.richmond.edu/">New Spiders Website</a>
                        - Official site for all new University of Richmond Spiders. Offers detailed
                        <a href="http://newspiders.richmond.edu/checklist/index.html"> instructions and
                        checklists</a> on what to do to get ready for school.
                    </p>
                </Navigation>

                <Navigation>
                    <p>
                        <a href="registrar.richmond.edu/">University Registrar</a>
                        - Inquiries, overrides, calendars, grading and other policies.
                    </p>
                </Navigation>

                <Navigation>
                    <p>
                        <a href="housing.richmond.edu">Student Housing</a>
                        - Housing Office of University of Richmond, for your on campus Housing related questions.
                    </p>
                </Navigation>

                <Navigation>
                    <p>
                        <a href="involved.richmond.edu/">Center for Student Involvement</a>
                        - Information on ways to be involved on campus.
                    </p>
                </Navigation>

                <Navigation>

                    <p>
                        <a href="https://drive.google.com/file/d/0B8XLxRHAcll0UmMtQmdfU0E1eHc/view?usp=sharing">CSSA New Student Handbook</a>
                        - We have prepared a guide to new students on arriving at, adjusting to, and living at University
                        of Richmond. <small>[Chinese only]</small>
                    </p>
                </Navigation>
            </div>
        )
        } else if(this.state.activeTab === 1) {
            return (
                <div className="faq">


            <div class="content">


                <Navigation>
            <a href="#Joining and Membership"><h5><li>Joining and Membership</li></h5></a>
                </Navigation>
                <Navigation>
            <a href="#Life at RVA"><h5><li>Life at RVA</li></h5></a>
                </Navigation>

            </div>

            <div class="faqTitle">
                <a name="Joining and Membership"></a><h5>Joining and Membership</h5>
            </div>
            <div class="faqContainer">
                <div class="faqQuestion">
                <h6>
                How do I join URCSSA?

        </h6>
            </div>
            <div class="faqAnswer">
                <Navigation>
                <p>
                If you want to become a member, please come to our table during SpiderFest,
                held at the beginning of each semester (2016’s is on September 1).
            SpiderFest is the premier fall kickoff event where you can enjoy a lot of fun
            activities and learn about over 100 student organizations on campus. (Learn more:
                <a href="http://involved.richmond.edu/campus-programs/campus-traditions/spiderfest.html">SpiderFest</a>)
                </p>
                </Navigation>
                <Navigation>
                <p>

                If you want to join our executive team and engage in event planning or management,
                please keep an eye on our official accounts in WeChat as well as our website for positions.
                                                                                                     Please feel free to contact us through email for any questions or concerns.
            </p>
                </Navigation>
            </div>
            </div>
            <div class="faqContainer">
                <div class="faqQuestion">
                <h6>
                What kind of activities should I expect from URCSSA?
        </h6>
            </div>
            <div class="faqAnswer">
                <Navigation>
                <p>
                We normally hold parties to celebrate Chinese holidays such as the Mid-Autumn Festival and the Spring Festival. Other fun activities like UR basketball tournament and Voice of Virginia are awaiting you! This year, our New Student Welcome Party will be held on Saturday, September 17 in Keller Hall Reception Room. Save the date, come join us and have fun!
            </p>
                </Navigation>
            </div>
            </div>

            <div class="faqTitle">
                <a name="Life at RVA"></a><h5>Life at RVA</h5>
            </div>
            <div class="faqContainer">
                <div class="faqQuestion">
                <h6>
                What furniture is provided in the student dorm room?
        </h6>
            </div>
            <div class="faqAnswer">
                <Navigation>
                <p>
                The University provides a regular twin-size bed, a desk, a chair, a chest for each person,
                and one shared floor bookcase. For more go to <a href="https://residencelife.richmond.edu/housing/">Student Housing</a>.
            </p>
                </Navigation>
            </div>
            </div>
            <div class="faqContainer">
                <div class="faqQuestion">
                <h6>
                Do the rooms have a microwave and fridge?
        </h6>
            </div>
            <div class="faqAnswer">
                <Navigation>
                <p>
                No. But a combo of microwave and fridge is available for rent.
                                                                             Contact Dorms Direct (unaffiliated with UR or CSSA) online at <a href="http://dormsdirect.com/index.html">www.dormsdirect.com </a>
             or by phone at 804-223-2345 for rental information. You may also bring a small refrigerator (4.1 cubic feet) and/or a microwave for heating.
                </p>
                </Navigation>
             </div>
            </div>
            <div class="faqContainer">
                <div class="faqQuestion">
                <h6>
                How does the mean plan work?
        </h6>
            </div>
            <div class="faqAnswer">
                <Navigation>
                <p>
                Meal plan participation is required as part of on campus housing agreement. For most residence halls, students can choose Spider Unlimited, which includes unlimited meals at Heilman Dining Center and $760 Dining dollars per semester. This meal plan will include 2 guest meal and the dining dollors only roll over within the academic year. Student can also upgrade to Spider Plus Unlimited, which have $1060 dining dollar and unlimited meal.
            </p>
                </Navigation>
            </div>
            </div>
            <div class="faqContainer">
                <div class="faqQuestion">
                <h6>
                How do I get to the banks near school?

        </h6>
            </div>
            <div class="faqAnswer">
                <Navigation>
                <p>
                There are several banks near campus: including BB&T and Bank of America (BOA). Usually there will be BB&T staff coming to UR and tabling at the Commons at the beginning of each school year. But students may need to use other transportation to go to BOA. There is Uber and shuttles on campus that will help you to get there.

            </p>
                </Navigation>
            </div>
            </div>
            <div class="faqContainer">
                <div class="faqQuestion">
                <h6>
                Is storage available on campus in summer?

        </h6>
            </div>
            <div class="faqAnswer">
                <Navigation>
                <p>
                Unfortunately, summer storage is not available on campus during the summer, but you can contact storage company for storage unit, truck rentals and other packing supplies (extra space storage, mini price storage, SpaceMart Self Storage, U-haul, etc.).
        </p>
                </Navigation>
            </div>
            </div>
            </div>
        )
        }

    }



    render() {
        return(
            <div>
            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                <Tab>Resources</Tab>
                <Tab>FAQ</Tab>
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




export default Information;
