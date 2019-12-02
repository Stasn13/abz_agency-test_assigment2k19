import React from 'react';
import "../scss/footer.scss"
import ReactSVG from "react-svg";

class Footer extends React.Component {

    render() {
        return (
            <footer id="footer">
                <div className="container">
                    <div className="top-footer">
                        <div className="logo">
                            <a href="/">
                                <ReactSVG
                                    src={require("../images/logo/logo.svg")}
                                />
                            </a>
                        </div>
                        <nav>
                            <li>About me</li>
                            <li>Relationships</li>
                            <li>Requirements</li>
                            <li>Users</li>
                            <li>Sign Up</li>
                        </nav>
                    </div>
                    <div className="divider"></div>
                    <div className="main-footer">
                        <div className="contacts-block">
                            <ul>
                                <li>
                                    <ReactSVG src={require("../images/icons/mail.svg")}/>
                                    <a href="mailto:work.of.future@gmail.com">work.of.future@gmail.com</a>
                                </li>
                                <li>
                                    <ReactSVG className="phone" src={require("../images/icons/phone.svg")} />
                                    <span>+38 (050) 789 24 98</span>
                                </li>
                                <li>
                                    <ReactSVG className="cellphone" src={require("../images/icons/cellphone.svg")} />
                                    <span>+38 (095) 556 08 45</span>
                                </li>
                            </ul>
                        </div>
                        <div className="links-block">
                            <div className="footer-links">
                                <a href="/">News</a>
                                <a href="/">Blog</a>
                                <a href="/">Partners</a>
                                <a href="/">Shop</a>
                            </div>
                            <div className="footer-links">
                                <a href="/">Overview</a>
                                <a href="/">Design</a>
                                <a href="/">Code</a>
                                <a href="/">Collaborate</a>
                            </div>
                            <div className="footer-links">
                                <a href="/">Tutorials</a>
                                <a href="/">Resources</a>
                                <a href="/">Guides</a>
                                <a href="/">Examples</a>
                            </div>
                            <div className="footer-links">
                                <a href="/">FAQ</a>
                                <a href="/">Terms</a>
                                <a href="/">Conditions</a>
                                <a href="/">Help</a>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-footer">
                        <div className="copyright">
                            © abz.agency specially for the test task
                        </div>
                        <div className="social-block">
                            <a href="/"><ReactSVG src={require("../images/icons/facebook.svg")} /></a>
                            <a href="/"><ReactSVG src={require("../images/icons/linkedin.svg")} /></a>
                            <a href="/"><ReactSVG src={require("../images/icons/instagram.svg")} /></a>
                            <a href="/"><ReactSVG src={require("../images/icons/twitter.svg")} /></a>
                            <a href="/"><ReactSVG src={require("../images/icons/pinterest.svg")} /></a>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;