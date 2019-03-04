import React from 'react';
import '../styles/certificates.css';
import { white } from 'ansi-colors';

export default class Certificate extends React.Component {
    render() {
        return (<div className="card-text">
            <div class="container">
                <ul>
                    <li>
                        <div><span></span>
                            <div class="title">Datacamp</div>
                            <div class="info"><a style={{ color: 'white' }}
                                href="https://www.datacamp.com/statement-of-accomplishment/course/6f0866676b18aa33b32febc2065fccc5f440b4dd">
                                Statistical Thinking in Python </a></div>
                        </div> <span class="number"><span>May 2018</span> <span>May 2018</span></span>
                    </li>
                    <li>
                        <div><span></span>
                            <div class="title">Datacamp</div>
                            <div class="info"><a style={{ color: 'white' }}
                                href="https://www.datacamp.com/statement-of-accomplishment/course/2af6542b3f57cb011ea1a0eecd5a3cf8e222fc4c">
                                Supervised Learning with scikit-learn </a></div>
                        </div> <span class="number"><span>May 2018</span> <span>May 2018</span></span>
                    </li>
                    <li>
                        <div><span></span>
                            <div class="title">Udacity</div>
                            <div class="info"><a style={{ color: 'white' }}
                                href="https://graduation.udacity.com/confirm/32W7SPJR">
                                Data Analyst Nanodegree
                            </a></div>
                        </div> <span class="number"><span>April 2018</span> <span>July 2017</span></span>
                    </li>
                    <li><span></span>
                        <div>
                            <div class="title"><strong>EDX</strong></div>
                            <div class="info">
                                <a style={{ color: 'white' }}
                                    href="https://s3.amazonaws.com/verify.edx.org/downloads/833cd47dea3f4875a40f53ce40bdade1/Certificate.pdf">
                                    Big Data with Apache Sparks
                            </a></div>
                        </div> <span class="number"><span>May 2015</span> <span>Mar 2015</span></span>
                    </li>
                </ul>
            </div>
        </div>);
    }
}