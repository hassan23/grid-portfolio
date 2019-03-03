import React from 'react';

export default class Contact extends React.Component {
    render() {
        return (<div className="card-text">
            <h4>CONTACT ME</h4>
            <strong>Swing by for a cup of coffee, or leave me a email</strong>
            <div className="contact-img-wrapper">
                <img src="https://www.w3schools.com/w3images/map.jpg" className="contact-image--cover" alt="My.jpg" />
                <div className="email">
                    <label name="email">sr.hassan23@gmail.com</label>
                    <br />
                    <label name="phone number">+91 9675366646</label>
                    <br />
                    <label name="city">New Delhi (110025)</label>
                    <br />
                    <label name="country">India</label>
                </div>
            </div>

        </div >);
    }
}