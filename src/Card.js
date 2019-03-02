import React from 'react';
import { wrapGrid } from 'animate-css-grid';
import './Card.css';

const gridBoxes = [{
    subject: '<AboutMe />',
    color: '#C26868'
}, {
    subject: '<Education />',
    color: '#4C5364'
}, {
    subject: '<SkillSet />',
    color: '#6aa0aa'
}, {
    subject: '<Certification />',
    color: '#49b790'
}, {
    subject: '<Experience />',
    color: '#4d6961'
},
{
    subject: '<Projects />',
    color: '#a18a88'
},
{
    subject: '<Blog />',
    color: '#8eb1b1'
},
{
    subject: '<Hobby />',
    color: '#e56e6e'
}, {
    subject: '<ContactMe />',
    color: '#C26868'
}];
class Text extends React.Component {
    render() {
        return (<div>
            <h3>MOHD HASSAAN </h3>
            <p className="w3-container w3-center w3-animate-bottom">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ipsam magni,
                quibusdam quia dolores iste blanditiis neque modi. Id voluptatibus tempora
                itaque sint est nobis non fugit modi atque quia!</p>
            <p className="slide-top">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ipsam magni,
            quibusdam quia dolores iste blanditiis neque modi. Id voluptatibus tempora
                itaque sint est nobis non fugit modi atque quia!</p>
            <p className="slide-top">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ipsam magni,
            quibusdam quia dolores iste blanditiis neque modi. Id voluptatibus tempora
                itaque sint est nobis non fugit modi atque quia!</p>
            <p className="slide-top">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ipsam magni,
            quibusdam quia dolores iste blanditiis neque modi. Id voluptatibus tempora
                itaque sint est nobis non fugit modi atque quia!</p>
            <p className="slide-top">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ipsam magni,
            quibusdam quia dolores iste blanditiis neque modi. Id voluptatibus tempora
                itaque sint est nobis non fugit modi atque quia!</p>
        </div>);
    }
}
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
            >{this.state.expanded ? <Text /> :
                (<div>

                    {/* <div className="card__avatar" />
                    <div className="card__title" /> */}
                    <div className="card__description"> {this.props.subject}</div>
                </div>)}
            </div>
        );
    }
}

class Grid extends React.Component {
    componentDidMount() {
        // will automatically clean itself up when dom node is removed
        wrapGrid(this.grid, { easing: 'anticipate', stagger: 10, duration: 1000, onEnd: () => <Text /> });
    }

    render() {
        let classes = "grid";
        Object.keys(this.props.settings)
            .filter(k => this.props.settings[k])
            .forEach(k => (classes += " " + k));
        return (
            <div className={classes} ref={el => (this.grid = el)}>
                {[...gridBoxes].map(({ subject, color }) => <Card key={subject} color={color} subject={subject} />)}
            </div>
        );
    }
}

class GridContainer extends React.Component {
    state = {
        "grid-gap": false,
        "grid-template-columns": true,
    };

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
