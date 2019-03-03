import React from 'react';

export default class About extends React.Component {
    render() {
        return (<div className="card-text">
            <h4>MOHD HASSAAN</h4>
            <div className="img-wrapper">
                <img src="/images/pro.jpg" className="image--cover" alt="My.jpg" />
            </div>
            <p style={{ fontWeight: 200, fontStyle: 'italic' }}>With more than 3.5 years of rich experience in Web developing including front-end and Back-end. Demonstrated
            ability to develop customized applications in a project-oriented environment with aggressive deadlines,
                working as a responsible player.</p>
        </div>);
    }
}