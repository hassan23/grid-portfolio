import React from 'react';
import { wrapGrid } from 'animate-css-grid';
import Text from './sections/index';
import './Card.css';


const gridBoxes = [{
    subject: '<AboutMe />',
    color: '#233142',
    fontCol: '#facf5a',
}, {
    subject: '<Education />',
    color: '#233142',
    fontCol: '#facf5a'
}, {
    subject: '<SkillSet />',
    color: '#233142',
    fontCol: '#facf5a',
}, {
    subject: '<Certification />',
    color: '#facf5a',
    fontCol: '#233142'
}, {
    subject: '<Experience />',
    color: '#facf5a',
    fontCol: '#233142'
},
{
    subject: '<Projects />',
    color: '#facf5a',
    fontCol: '#233142'
},
{
    subject: '<Blog />',
    color: '#ff5959',
    fontCol: '#facf5a'
},
{
    subject: '<Hobby />',
    color: '#ff5959',
    fontCol: '#facf5a'
}, {
    subject: '<ContactMe />',
    color: '#ff5959',
    fontCol: '#facf5a'
}];

class Card extends React.Component {
    state = { expanded: false };
    randomNumber = Math.floor(Math.random() * 5) + 1;

    render() {
        return (
            <div
                style={{ backgroundColor: this.props.color }}
                class={`card card--${this.randomNumber} ${
                    this.state.expanded ? "card--expanded" : ""
                    }`}
                onClick={() => {
                    this.setState({ expanded: !this.state.expanded });
                }}
            >{this.state.expanded ? <Text category={this.props.subject} fontCol={this.props.fontCol} /> :
                (<div>

                    {/* <div className="card__avatar" />
                        <div className="card__title" /> */}
                    <div className="card__description" style={{ color: this.props.fontCol }}> {this.props.subject}</div>
                </div>)}
            </div>
        );
    }
}

class Grid extends React.Component {
    componentDidMount() {
        // will automatically clean itself up when dom node is removed
        wrapGrid(this.grid, { easing: 'anticipate', stagger: 10, duration: 1000 });
    }

    render() {
        let classes = "grid";
        Object.keys(this.props.settings)
            .filter(k => this.props.settings[k])
            .forEach(k => (classes += " " + k));
        return (
            <div className={classes} ref={el => (this.grid = el)}>
                {[...gridBoxes].map(({ subject, color, fontCol }) => <Card key={subject} color={color} subject={subject} fontCol={fontCol} />)}
            </div>
        );
    }
}

class GridContainer extends React.Component {
    state = {
        "grid-gap": false,
        "grid-template-columns": true,
    };
    componentDidMount() {
        if (window.innerWidth < 444) {
            this.setState({ "grid-template-columns": false });
        }
    }
    render() {
        return (
            <div className="p-4">
                <Grid settings={this.state} />
            </div>
        );
    }
}

export default GridContainer;
    // ReactDOM.render(<GridContainer />, document.getElementById("main"));
