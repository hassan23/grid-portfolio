import React from 'react';
import '../styles/skills.css';
export default class Skills extends React.Component {
    render() {
        return (<div className="card-text">
            <div class="page">
                <h1></h1>
                <div class="clearfix">
                    <div class="c100 p80 orange">
                        <span>JS</span>
                        <div class="slice">
                            <div class="bar"></div>
                            <div class="fill"></div>
                        </div>
                    </div>
                    <div class="c100 p70">
                        <span>React</span>
                        <div class="slice">
                            <div class="bar"></div>
                            <div class="fill"></div>
                        </div>
                    </div>

                    <div class="c100 p60 green">
                        <span>Python</span>
                        <div class="slice">
                            <div class="bar"></div>
                            <div class="fill"></div>
                        </div>
                    </div>

                </div>
                <div class="clearfix">

                    <div class="c100 p60">
                        <span>SQL</span>
                        <div class="slice">
                            <div class="bar"></div>
                            <div class="fill"></div>
                        </div>
                    </div>

                    <div class="c100 p70 green">
                        <span>Node</span>
                        <div class="slice">
                            <div class="bar"></div>
                            <div class="fill"></div>
                        </div>
                    </div>

                    <div class="c100 p30 orange">
                        <span>Redux</span>
                        <div class="slice">
                            <div class="bar"></div>
                            <div class="fill"></div>
                        </div>
                    </div>

                </div>
            </div></div>);
    }
}