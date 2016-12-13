import React, { Component } from 'react';
import LittleBoxContainer from './little_box_container';

class GameBoard extends Component {

    static rows = 10;
    static columns = 8;
    static needsRemove = false;

    constructor(props) {
        console.debug("GameBoard");
        super(props);
        this.reactBlocks = props.reactBlocks;
        this.timer = 0;
    }



    lookForPoints() {
        let verticalRemove = [];
        let count = 0;
        for(let cont of this.reactBlocks.littleBoxContainers) {
            verticalRemove[count] = cont.lookForPoints();
            count++;
        }
        let update = [];
        for(let x = 2; x < GameBoard.columns; x++) {
            let a = this.reactBlocks.littleBoxContainers[x-2];
            let b = this.reactBlocks.littleBoxContainers[x-1];
            let c = this.reactBlocks.littleBoxContainers[x];
            for(let y = 0; y < GameBoard.rows; y++){
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
                        GameBoard.needsRemove = true;
                        this.reactBlocks.metalClank.play();
                    }
                }
            }
        }
        for(let u of update) {
            u.setState(u.state);
        }
        let that = this;
        clearTimeout(this.timer);
        this.timer = setTimeout(()=>{
            if(GameBoard.needsRemove) {
                GameBoard.needsRemove = false;
                that.reactBlocks.removeBoxes();
                that.lookForPoints();
            }
        }, 1000)

    }

    render() {
        let boxContainers = [];
        for (var x = 0; x < GameBoard.columns; x++) {
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

