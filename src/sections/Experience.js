import React from 'react';
import '../styles/Experience.css';
export default class Experience extends React.Component {
    render() {
        return (<div className="card-text experience">
            <div class="timeline-exper">
                <div class="entry">
                    <div class="title">
                        <h3>2009 - 2010</h3>
                        <p>Title, Company</p>
                    </div>
                    <div class="body">
                        <p>Voluptatibus veniam ea reprehenderit atque reiciendis non laborum adipisci ipsa pariatur omnis.</p>

                    </div>
                </div>
                <div class="entry">
                    <div class="title">
                        <h3>2006 - 2008</h3>
                        <p>Title, Company</p>
                    </div>
                    <div class="body">
                        <p>Voluptatibus veniam ea reprehenderit atque reiciendis non laborum adipisci ipsa pariatur omnis.</p>

                    </div>
                </div>

            </div>
        </div>);
    }
}