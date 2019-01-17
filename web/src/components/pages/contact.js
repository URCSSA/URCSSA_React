import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className="container-fluid">


                <h1>
                    CHINESE STUDENTS AND SCHOLARS ASSOCIATION

                </h1>

                <p>
                    We appreciate your interest! Please reach out to us if you would like to: Propose an activity or collaboration; Comment on a previous activity; Or make a general inquiry.

                </p>

                <p>Richmond, VA
                </p>
                <p>cssa@richmond.edu
                </p>

                Your Name
                <br />
                <input name="realname" />
                <br />
                Your Email
                <br />
                <input name="email" />
                <br />
                Your Message
                <br />
                <textarea cols="40" rows="10" name="Message"></textarea>
                <br />
                <input type="submit" value="Send" />
                <input type="hidden" name="recipient" value="cssa@richmond.edu" />
                <input type="hidden" name="subject" value="Subject" />
                <input type="hidden" name="required" value="realname,email,Message" />



        </div>
    );
    }
}

export default Contact;
