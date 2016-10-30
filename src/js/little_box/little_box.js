import React, { Component } from 'react';
import Rainbow from '../comp/rainbow';
import MetalClank from '../audio/metal_clank';

class LittleBox extends Component {

    constructor(props) {
        super(props);
        this.reactBlocks = props.reactBlocks;
        console.debug("LittleBox");
        this.color = Rainbow.getRandomColor();
    }

    /**
     * Click event handler for the little box
     * @param e
     */
    littleBoxClicked(e){
        const value = this.color.p;
        this.reactBlocks.gameScore.addPoints(value);
        this.reactBlocks.metalClank.play();
    }

    render() {

        const colorStyle = {background: this.color.color};

        return (
            <div
                onClick={this.littleBoxClicked.bind(this)}
                className="little_box"
                style={colorStyle}
                data-color={this.color.color} ></div>
        );
    }
}

export default LittleBox;

