import React, { Component } from 'react';
import LittleBox from './little_box';

class LittleBoxContainer extends Component {

    constructor(props) {
        super(props);
        this.reactBlocks = props.reactBlocks;
        console.debug("LittleBoxContainer");
    }

    render() {
        let littleBlocks = [];
        for (var x = 0; x < 10; x++) {
            littleBlocks.push(<LittleBox
                reactBlocks={this.reactBlocks}
                key={x} />);
        }
        return (
            <div className="little_box_container">
                {littleBlocks}
            </div>
        );
    }
}

export default LittleBoxContainer;

