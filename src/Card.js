import React from 'react';
import { wrapGrid } from 'animate-css-grid';
import './Card.css';

class Text extends React.Component {
    render() {
        return (<div className="text-box">
            <h1>  Mohd Hassaan </h1>
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
                class={`card card--${this.randomNumber} ${
                    this.state.expanded ? "card--expanded" : ""
                    }`}
                onClick={() => {
                    this.setState({ expanded: !this.state.expanded });
                }}
            >{this.state.expanded ? <Text /> :
                (<div>

                    <div className="card__avatar" />
                    <div className="card__title" />
                    <div className="card__description" />
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
                {[...Array(9).keys()].map(i => <Card key={i} />)}
            </div>
        );
    }
}

class GridContainer extends React.Component {
    state = {
        "grid-gap": false,
        "grid-template-columns": false,
    };

    render() {
        return (
            <div className="p-4">
                <div className="mb-4 pt-4">
                    {Object.keys(this.state).map(k => (
                        <button
                            className="btn"
                            onClick={() => this.setState({ [k]: !this.state[k] })}
                        >
                            toggle <code>{k}</code>
                        </button>
                    ))}
                </div>
                <Grid settings={this.state} />
            </div>
        );
    }
}

export default GridContainer;
// ReactDOM.render(<GridContainer />, document.getElementById("main"));
