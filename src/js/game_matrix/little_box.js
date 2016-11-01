import React, { Component } from 'react';

class LittleBox extends Component {

    static littleBoxLock = false;

    constructor(props) {
        console.debug("LittleBox");
        super(props);
        this.reactBlocks = props.reactBlocks;
        this.container = props.container;
        this.color = props.color;
        this.state = {
            dying: props.dying
        };

    }

    /**
     * Click event handler for the little box
     * @param event
     */
    littleBoxClicked(event){
        let value = this.color.getValue();
        this.container.setDying([this.props.y_val]);
        this.reactBlocks.gameScore.addPoints(value);
        this.reactBlocks.gameBoard.lookForPoints();
    }

    render() {
        const colorStyle = {background: this.color.getColor()};
        let className = "little_box ";
        if(this.props.dying || this.state.dying){
            className += "magictime holeOut";
        }
        return (
            <div
                onClick={this.littleBoxClicked.bind(this)}
                className={className}
                style={colorStyle}
                ref={(box) => this.box = box}
                data-color={this.color.getColor()} ></div>
        );
    }
}

export default LittleBox;

