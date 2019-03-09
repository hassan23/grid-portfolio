import React from 'react';
import '../styles/hobby.css';
export default class Hobby extends React.Component {
    render() {
        return (<div className="card-text">
            <div class="media"> <img class="media__image" src="/images/dev.jpeg" alt="" />
                <div class="media__body">
                    <h2>Do Code</h2>
                </div>
            </div>
            <div class="media"> <img class="media__image" src="/images/got.jpeg" alt="" />
                <div class="media__body">
                    <h2>Watch Movies</h2>
                </div>
            </div>
            <div class="media"> <img class="media__image" src="/images/phil.png" alt="" />
                <div class="media__body">
                    <h2>Study Philosophy</h2>
                </div>
            </div>


        </div>);
    }
}