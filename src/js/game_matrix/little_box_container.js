import React, { Component } from 'react';
import LittleBox from './little_box';
import Rainbow from '../comp/rainbow';
import Color from '../comp/color';

class LittleBoxContainer extends Component {

    constructor(props) {
        console.debug("LittleBoxContainer");
        super(props);
        this.reactBlocks = props.reactBlocks;
        this.x_val = props.x_val;
        let littleBoxes = [];
        for (var y = 0; y < 10; y++) {
            let color = Rainbow.getRandomColor();
            littleBoxes.push({
                y: y,
                x: this.x_val,
                dying: false,
                color: color
            });
        }
        this.state = {
            littleBoxes: littleBoxes
        };
        this.reactBlocks.setLittleBoxContainer(this.x_val, this);
    }

    lookForPoints() {
        let pre = false;
        let prepre = false;
        var littleBoxes = this.state.littleBoxes;

        var boxLoop = () => {
            let found = false;
            for (var box of littleBoxes) {
                if (typeof(box) != "undefined") {
                    if (prepre === false) {
                        prepre = box;
                    } else if (pre === false) {
                        pre = box;
                    } else {
                        let precolor = Symbol.for(pre.color.color);
                        let preprecolor = Symbol.for(prepre.color.color);
                        let boxcolor = Symbol.for(box.color.color);
                        if (precolor === preprecolor && precolor === boxcolor) {
                            let points = Color.color_values[precolor] * 3;
                            this.reactBlocks.gameScore.addPoints(points);
                            this.setDying([
                                pre.y,
                                prepre.y,
                                box.y
                            ]);
                            found = true;

                            break;
                        } else {
                            prepre = pre;
                            pre = box;
                        }
                    }
                }
            }
        };
        boxLoop();
    }

    removeBoxes() {
        let temp = this.state.littleBoxes;
        for(var x = 0; x < temp.length; x++){
            if(temp[x].dying){
                delete temp[x];
            }
        }
        this.setState({littleBoxes: this.makeCleanLittleBoxes(temp)});
    }

    setDying(ys) {
        this.reactBlocks.metalClank.play();
        let temp = this.state.littleBoxes;
        for(var y of ys) {
            temp[y].dying = true;
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
                littleBoxes[y].y = count;
                tmp.push(littleBoxes[y]);
                count++;
            }
        }
        return tmp;
    }

    render() {
        let littleBoxes = [];
        for(var box of this.state.littleBoxes) {
            if(typeof(box) != "undefined" ) {
                littleBoxes.push(<LittleBox
                    dying={box.dying}
                    container={this}
                    y_val={box.y}
                    x_val={this.x_val}
                    reactBlocks={this.reactBlocks}
                    color={box.color}
                    key={box.y}/>);
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

