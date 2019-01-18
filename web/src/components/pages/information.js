import React, { Component } from 'react';

class Information extends Component {
    constructor(props) {
        super(props);
        this.state = {display: "information"};
        this.displayInformation = this.displayInformation.bind(this);
        this.displayResources = this.displayResources.bind(this);
        this.displayFaq = this.displayFaq.bind(this);
    }

    displayInformation() {
        this.setState({display: "information"});
    }

    displayResources() {
        this.setState({display: "resources"});
    }

    displayFaq() {
        this.setState({display: "faq"});
    }

    render() {
        var content;
        if(this.state.display === "information") {
            content =
            <div className="information">
                <h1>
                    Information
                 </h1>

                <p>
                    Welcome to University of Richmond CSSA! We are excited to share with you information about our team, activities, and many useful resources and information for incoming and returning students alike. We hope you find our site helpful in assisting your journey at UR.
                </p>
            </div>
        } else if(this.state.display === "resources") {
            content =
            <div className="resources">
                <h1>
                    Resources
                </h1>

                <p>
                    Welcome to University of Richmond! URCSSA gathered all kinds of information that will make your life here in Richmond easier.
                    Here's some of them. Hope you find them useful.
                </p>

                <p>
                    <strong> <a href="http://newspiders.richmond.edu/">New Spiders Website</a> </strong>
                    - Official site for all new University of Richmond Spiders. Offers detailed
                    <a href="http://newspiders.richmond.edu/checklist/index.html"> instructions and
                        checklists</a> on what to do to get ready for school.
                </p>

                <p>
                    <strong><a href="registrar.richmond.edu/">University Registrar</a></strong>
                    - Inquiries, overrides, calendars, grading and other policies.
                </p>

                <p>
                    <strong><a href="housing.richmond.edu">Student Housing</a></strong>
                    - Housing Office of University of Richmond, for your on campus Housing related questions.
                </p>

                <p>
                    <strong><a href="involved.richmond.edu/">Center for Student Involvement</a></strong>
                    - Information on ways to be involved on campus.
                </p>

                <p>
                    <strong><a href="https://drive.google.com/file/d/0B8XLxRHAcll0UmMtQmdfU0E1eHc/view?usp=sharing">CSSA New Student Handbook</a> </strong>
                    - We have prepared a guide to new students on arriving at, adjusting to, and living at University
                    of Richmond. <small>[Chinese only]</small>
                </p>
            </div>
        } else if(this.state.display === "faq"){
            content =
            <div className="faq">
                <h1>
                    Frequently Asked Questions
                </h1>

                <div class="content"> <h3>Contents (click on the item to jump to a section)</h3>
                    <ul>
                        <a href="#Joining and Membership"><li>Joining and Membership</li></a>
                        <a href="#Life at RVA"><li>Life at RVA</li></a>
                    </ul>
                </div>

                <div class="faqTitle">
                    <a name="Joining and Membership"></a><h2>Joining and Membership</h2>
                </div>
                <div class="faqContainer">
                    <div class="faqQuestion">
                <h3>
                    How do I join URCSSA?

                </h3>
                    </div>
                    <div class="faqAnswer">
                        <p>
                            If you want to become a member, please come to our table during SpiderFest,
                            held at the beginning of each semester (2016’s is on September 1).
                            SpiderFest is the premier fall kickoff event where you can enjoy a lot of fun
                            activities and learn about over 100 student organizations on campus. (Learn more:
                            <a href="http://involved.richmond.edu/campus-programs/campus-traditions/spiderfest.html">SpiderFest</a>)
                        </p>
                        <p>
                            If you want to join our executive team and engage in event planning or management,
                            please keep an eye on our official accounts in WeChat as well as our website for positions.
                            Please feel free to contact us through email for any questions or concerns.
                        </p>
                    </div>
                </div>
                <div class="faqContainer">
                    <div class="faqQuestion">
                        <h3>
                            What kind of activities should I expect from URCSSA?
                        </h3>
                    </div>
                    <div class="faqAnswer">
                        <p>
                            We normally hold parties to celebrate Chinese holidays such as the Mid-Autumn Festival and the Spring Festival. Other fun activities like UR basketball tournament and Voice of Virginia are awaiting you! This year, our New Student Welcome Party will be held on Saturday, September 17 in Keller Hall Reception Room. Save the date, come join us and have fun!
                        </p>
                    </div>
                </div>

                <div class="faqTitle">
                    <a name="Life at RVA"></a><h2>Life at RVA</h2>
                </div>
                <div class="faqContainer">
                    <div class="faqQuestion">
                        <h3>
                            What furniture is provided in the student dorm room?
                        </h3>
                    </div>
                    <div class="faqAnswer">
                        <p>
                            The University provides a regular twin-size bed, a desk, a chair, a chest for each person,
                            and one shared floor bookcase. For more go to <a href="housing.richmond.edu">Student Housing</a>.
                        </p>
                    </div>
                </div>
                <div class="faqContainer">
                    <div class="faqQuestion">
                        <h3>
                            Do the rooms have a microwave and fridge?
                        </h3>
                    </div>
                    <div class="faqAnswer">
                        <p>
                            No. But a combo of microwave and fridge is available for rent.
                            Contact Dorms Direct (unaffiliated with UR or CSSA) online at <a href="www.dormsdirect.com">www.dormsdirect.com</a>
                            or by phone at 804-223-2345 for rental information. You may also bring a small refrigerator (4.1 cubic feet) and/or a microwave for heating.

                        </p>
                    </div>
                </div>
                <div class="faqContainer">
                    <div class="faqQuestion">
                        <h3>
                            How does the mean plan work?
                        </h3>
                    </div>
                    <div class="faqAnswer">
                        <p>
                            Meal plan participation is required as part of on campus housing agreement. For most residence halls, students can choose Spider Unlimited, which includes unlimited meals at Heilman Dining Center and $760 Dining dollars per semester. This meal plan will include 2 guest meal and the dining dollors only roll over within the academic year. Student can also upgrade to Spider Plus Unlimited, which have $1060 dining dollar and unlimited meal.
                        </p>
                    </div>
                </div>
                <div class="faqContainer">
                    <div class="faqQuestion">
                        <h3>
                            How do I get to the banks near school?

                        </h3>
                    </div>
                    <div class="faqAnswer">
                        <p>
                            There are several banks near campus: including BB&T and Bank of America (BOA). Usually there will be BB&T staff coming to UR and tabling at the Commons at the beginning of each school year. But students may need to use other transportation to go to BOA. There is Uber and shuttles on campus that will help you to get there.

                        </p>
                    </div>
                </div>
                <div class="faqContainer">
                    <div class="faqQuestion">
                        <h3>
                            Is storage available on campus in summer?

                        </h3>
                    </div>
                    <div class="faqAnswer">
                        <p>
                            Unfortunately, summer storage is not available on campus during the summer, but you can contact storage company for storage unit, truck rentals and other packing supplies (extra space storage, mini price storage, SpaceMart Self Storage, U-haul, etc.).
                        </p>
                    </div>
                </div>
            </div>

        }
        return (
            <div className="container-fluid">

                {/* Sidebar */}
                <nav className="navbar navbar-inverse navbar-fixed-top" id="sidebar-wrapper" role="navigation">
                    <ul className="nav sidebar-nav">
                        <li>
                            <button onClick={this.displayInformation}>Information</button>
                        </li>
                        <li>
                            <button onClick={this.displayResources}>Resources</button>
                        </li>
                        <li>
                            <button onClick={this.displayFaq}>FAQ</button>
                        </li>
                    </ul>
                </nav>

                {content}

            </div>
        );
    }
}

export default Information;
