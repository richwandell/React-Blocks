import React, { Component } from 'react';
import LittleBox from './little_box';
import Rainbow from '../comp/rainbow';
import Color from '../comp/color';
import GameBoard from './game_board';

class LittleBoxContainer extends Component {

    constructor(props) {

        console.debug("LittleBoxContainer");
        super(props);
        this.reactBlocks = props.reactBlocks;
        this.x_val = props.x_val;
        let littleBoxes = [];
        for (let y = 0; y < GameBoard.rows; y++) {
            let color = Rainbow.getRandomColor();
            littleBoxes.push({
                y: y,
                x: this.x_val,
                dying: false,
                color: color,
                key: y
            });
        }
        this.state = {
            littleBoxes: littleBoxes
        };
        this.reactBlocks.setLittleBoxContainer(this.x_val, this);
    }

    lookForPoints() {
        let littleBoxes = this.state.littleBoxes;

        for(let y = 2; y < littleBoxes.length; y++){
            let a = littleBoxes[y - 2];
            let b = littleBoxes[y - 1];
            let c = littleBoxes[y];
            let ac = Symbol.for(a.color.color);
            let bc = Symbol.for(b.color.color);
            let cc = Symbol.for(c.color.color);

            if(ac === bc && ac === cc){
                this.setDying([y-2, y-1, y]);
            }
        }
    }

    removeBoxes() {
        let temp = this.state.littleBoxes;
        let needsUpdate = false;
        for(let x = 0; x < temp.length; x++){
            if(typeof(temp[x]) != "undefined" && temp[x].dying){
                needsUpdate = true;
                delete temp[x];
            }
        }
        if(needsUpdate) {
            this.setState({littleBoxes: this.makeCleanLittleBoxes(temp)});
        }
    }

    setDying(ys) {

        GameBoard.needsRemove = true;
        this.reactBlocks.metalClank.play();
        let temp = this.state.littleBoxes;
        for(let y of ys) {
            if(typeof(temp[y]) != "undefined") {
                temp[y].dying = true;
            }
        }
        this.setState({
            littleBoxes: temp
        });
    }

    makeCleanLittleBoxes(littleBoxes) {
        let tmp = [];
        let count = 0;
        for(var y = 0; y < littleBoxes.length; y++) {
            if(typeof(littleBoxes[y]) != "undefined") {
                tmp.push(littleBoxes[y]);
                count++;
            }
        }
        return tmp;
    }

    render() {
        let littleBoxes = [];
        let current = 0;
        for(let y = 0; y < this.state.littleBoxes.length; y++) {
            if(typeof(this.state.littleBoxes[y]) != "undefined" ) {
                let box = this.state.littleBoxes[y];
                littleBoxes.push(<LittleBox
                    dying={box.dying}
                    container={this}
                    y_val={current}
                    key_val={box.y}
                    x_val={this.x_val}
                    reactBlocks={this.reactBlocks}
                    color={box.color}
                    key={box.y} />);
                current++;
            }
        }

        return (
            <div className="little_box_container">
                {littleBoxes}
            </div>
        );
    }
}

export default LittleBoxContainer;

