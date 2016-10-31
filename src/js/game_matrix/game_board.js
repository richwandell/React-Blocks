import React, { Component } from 'react';
import LittleBoxContainer from './little_box_container';
import Color from '../comp/color';

class GameBoard extends Component {

    constructor(props) {
        console.debug("GameBoard");
        super(props);
        this.reactBlocks = props.reactBlocks;
    }

    lookForPoints() {
        for(var cont of this.reactBlocks.littleBoxContainers) {
            cont.lookForPoints();
        }
        let update = [];
        for(var x = 2; x < 7; x++) {
            let a = this.reactBlocks.littleBoxContainers[x-2];
            let b = this.reactBlocks.littleBoxContainers[x-1];
            let c = this.reactBlocks.littleBoxContainers[x];
            for(var y = 0; y < 10; y++){
                if(
                    typeof(a.state.littleBoxes[y]) != "undefined" &&
                    typeof(b.state.littleBoxes[y]) != "undefined" &&
                    typeof(c.state.littleBoxes[y]) != "undefined"
                ) {
                    let _x = Symbol.for(a.state.littleBoxes[y].color.color);
                    let _y = Symbol.for(b.state.littleBoxes[y].color.color);
                    let _z = Symbol.for(c.state.littleBoxes[y].color.color);

                    if(_x === _y && _x === _z){
                        a.state.littleBoxes[y].dying = true;
                        b.state.littleBoxes[y].dying = true;
                        c.state.littleBoxes[y].dying = true;
                        update.push(a);
                        update.push(b);
                        update.push(c);
                    }
                }
            }
        }
        for(var u of update) {
            u.setState(u.state);
        }
    }

    render() {
        let boxContainers = [];
        for (var x = 0; x < 7; x++) {
            boxContainers.push(<LittleBoxContainer
                x_val={x}
                reactBlocks={this.reactBlocks}
                key={x} />);
        }
        return (
            <div id="game_board">
                {boxContainers}
            </div>
        );
    }
}

export default GameBoard;

