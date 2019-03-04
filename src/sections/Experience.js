import React from 'react';
import '../styles/Experience.css';
export default class Experience extends React.Component {
    render() {
        return (<div className="card-text experience">
            <div class="timeline-exper">

                <div class="entry">
                    <div class="title">
                        <h3><strong>2016 - 2018</strong></h3>
                        <p>Full Stack Dev, RSG Media</p>
                    </div>
                    <div class="body">
                        <p>Building Web application in Node(Mostly), React for Front End.
                            Build JavaScript Libraries for exporting Data into excel and Pdf format.
                            Visualizing Data in D3,HighCharts, PQ grids </p>

                    </div>
                </div>
                <div class="entry">
                    <div class="title">
                        <h3><strong>2015 - 2016</strong></h3>
                        <p>Automation Dev, Paytm</p>
                    </div>
                    <div class="body">
                        <p>Building Automation Tools which Make Data manipulation Faster and smoother in Python(mostly),Node.</p>

                    </div>
                </div>

            </div>
        </div>);
    }
}