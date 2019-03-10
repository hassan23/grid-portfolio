import React from 'react';
import '../styles/education.css';
export default class Education extends React.Component {
    render() {
        return (<div className="card-text">
            <ul className="timeline">
                <li>
                    <div className="direction-r">
                        <div className="flag-wrapper">
                            <span className="flag">Pesto</span>
                            <span className="time-wrapper"><span className="time">2019 - Present</span></span>
                        </div>
                        <div className="desc" style={{ color: this.props.fontCol }}>
                            Doing a bootcamp
                        </div>
                    </div>
                </li>

                <li>
                    <div className="direction-l">
                        <div className="flag-wrapper">
                            <span className="flag">B.tech</span>
                            <span className="time-wrapper"><span className="time">2015</span></span>
                        </div>
                        <div className="desc" style={{ color: this.props.fontCol }}>
                            Gratudated engeneering <br /> with majors in Computer Sciences
    </div>
                    </div>
                </li>

                <li>
                    <div className="direction-r">
                        <div className="flag-wrapper">
                            <span className="flag">Intermediate</span>
                            <span className="time-wrapper"><span className="time">2010</span></span>
                        </div>
                        <div className="desc" style={{ color: this.props.fontCol }}>
                            Graduated Intermediate <br /> With good grades
    </div>
                    </div>
                </li>

                <li>
                    <div className="direction-l">
                        <div className="flag-wrapper">
                            <span className="flag">High Scool</span>
                            <span className="time-wrapper"><span className="time">2008</span></span>
                        </div>
                        <div className="desc" style={{ color: this.props.fontCol }}>
                            Graduated High School <br />With nice grades
    </div>
                    </div>
                </li>

            </ul>

        </div>);
    }
}