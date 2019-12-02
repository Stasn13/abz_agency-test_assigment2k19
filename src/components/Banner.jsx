import React from 'react';
import "../scss/banner.scss"

class Banner extends React.Component {

    render() {
        return (
            <section id="banner">
                <div className="container">
                    <h1>Test assignment for Frontend Developer position</h1>
                    <p>We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository. Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck!</p>
                    <button className="cta btn-primary">Sign Up</button>
                </div>
            </section>
        );
    }
}

export default Banner;