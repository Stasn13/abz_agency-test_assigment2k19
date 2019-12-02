import React from 'react';
import "../scss/about-me.scss";

class AboutMe extends React.Component {

    render() {
        return (
            <section id="about-me">
                <div className="container">
                    <h2>Let's get acquainted</h2>
                    <div className="about-block">
                        <div className="about-icon"></div>
                        <div className="about-text">
                            <h3>I am cool frontend developer</h3>
                            <p className="first-paragraph">When real users have a slow experience on mobile, they're much less likely to find what they are looking for or purchase from you in the future. For many sites this equates to a huge missed opportunity, especially when more than half of visits are abandoned if a mobile page takes over 3 seconds to load.</p>
                            <p className="second-paragraph">Last week, Google Search and Ads teams announced two new speed initiatives to help improve user-experience on the web.</p>
                            <a href="/">Sign Up</a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutMe;