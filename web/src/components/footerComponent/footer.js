import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content, Footer,FooterLinkList,  } from 'react-mdl';
import qrcode from '../../Assets/images/devResources_OriginalWeb/qrCode.jpg';


class FooterLocal extends Component {
    render() {
        return (
            <footerLocal>
                <footer class="mdl-mega-footer">
                    <div class="mdl-mega-footer__top-section">
                        <div class="mdl-mega-footer__left-section">
                            <small>©URCSSA 2016-2019</small>
                        </div>
                        <div class="mdl-mega-footer__right-section">
                            <a href="https://www.richmond.edu/">University of Richmond</a>
                            <a href="https://involved.richmond.edu/student-orgs/index.html">Student Involvement @ UR</a>
                        </div>
                    </div>
                    <div class="mdl-mega-footer__middle-section">
                        <div class="mdl-mega-footer__drop-down-section">
                            <h1 class="mdl-mega-footer__heading">Address</h1>
                            <ul class="mdl-mega-footer__link-list">
                            <li><a href="https://www.richmond.edu/visit/">410 Westhampton Way</a></li>
                            <li><a href="https://www.richmond.edu/visit/">University of Richmond, VA 23173</a></li>
                            </ul>
                        </div>
                    <div class="mdl-mega-footer__drop-down-section">
                        <h1 class="mdl-mega-footer__heading">Follow Us</h1>
                        <ul class="mdl-mega-footer__link-list">
                        <li><img src={qrcode} alt="qrcode" className="social-media-img"/></li>

            </ul>
                    </div>
        </div>
        <div class="mdl-mega-footer__bottom-section">
            <div class="mdl-logo">
            More Information
        </div>
        <ul class="mdl-mega-footer__link-list">
            <li><a href="mailto:cssa@richmond.edu">Contact Us</a></li>
            <li><a href="https://urcssa.github.io/disclaimer.html">View Disclaimer</a></li>
        </ul>
        </div>
        </footer>

            </footerLocal>
        );
    }
}

export default FooterLocal;
