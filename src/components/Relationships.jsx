import React from 'react';
import "../scss/relationships.scss";

class Relationships extends React.Component {

    render() {
        return (
            <section id="relationships">
                <div className="container">
                    <h2>About my relationships with web-development</h2>
                    <div className="skills-block">
                        <div className="skills-item item-html">
                            <div className="skills-icon"></div>
                            <div className="skills-text">
                                <h3>I'm in love with HTML</h3>
                                <p>Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications.</p>
                            </div>
                        </div>
                        <div className="skills-item item-css">
                            <div className="skills-icon"></div>
                            <div className="skills-text">
                                <h3>CSS is my best friend</h3>
                                <p>Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML.</p>
                            </div>
                        </div>
                        <div className="skills-item item-js">
                            <div className="skills-icon"></div>
                            <div className="skills-text">
                                <h3>JavaScript is my passion</h3>
                                <p>JavaScript is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Relationships;