import React from 'react';

export default class Projects extends React.Component {
    render() {
        return (<div className="card-text">
            <h4>Projects coming soon......</h4>
            <div className="img-wrapper">
                <img src="/images/pro.jpg" className="image--cover" alt="My.jpg" />
            </div>
            <p style={{ fontWeight: 200, fontStyle: 'italic' }}></p>
        </div>);
    }
}