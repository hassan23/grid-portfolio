import React from 'react';

export default class Projects extends React.Component {
    render() {
        return (<div className="card-text">
            <div class="container">
                <div class="timeline-item" date-is='April 2018'>
                    <h1>Refugee Crisis</h1>
                    <p><a style={{ color: 'white' }}
                        href="https://hassan23.github.io/Refugee-crisis-visualisation/Refugee_final.html">
                        Interactive visualisation of refugee crisis in D3</a></p>
                </div>
                <div class="timeline-item" date-is='Dec 2017'>
                    <h1>Fraud Detection</h1>
                    <p><a style={{ color: 'white' }}
                        href="https://hassan23.github.io/Enron-Fraud-Detection-By-Machine-Learning/Report.html">
                        Enron fraud detection machine learning model</a></p>
                </div>

                <div class="timeline-item" date-is='Sep 2017'>
                    <h1>Election Analysis</h1>
                    <p>
                        <a style={{ color: 'white' }}
                            href="https://hassan23.github.io/India-Election-Analysis-with-R/electionanalysis.html">
                            Analysis of India's national election in R
                            </a></p>
                </div>

                <div class="timeline-item" date-is='June 2017'>
                    <h1>Astro</h1>
                    <p>
                        <a style={{ color: 'white' }}
                            href="adm.astro.com.my">
                            Web app for the employees and client of Astro. Keeping track of Orders, Program scheduling, logs,
                             sync with global timing,generating report in excel and PDF exports
                            </a></p>
                </div>
            </div>
        </div>);
    }
}