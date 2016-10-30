import React, { Component } from 'react';

class GameScore extends Component {

    constructor(props) {
        super(props);
        this.state = {
            score: 0
        };
    }

    addPoints(points) {
        this.setState({
            score: this.state.score + points
        });
    }

    render() {
        return (
            <div id="points">
                Score: {this.state.score}
            </div>
        );
    }
}

export default GameScore;

