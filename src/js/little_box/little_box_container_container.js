import React, { Component } from 'react';
import LittleBoxContainer from './little_box_container';

class LittleBoxContainerContainer extends Component {

    constructor(props) {
        super(props);
        this.reactBlocks = props.reactBlocks;
        console.debug("LittleBoxContainerContainer");
    }

    render() {
        let littleBlocks = [];
        for (var x = 0; x < 7; x++) {
            littleBlocks.push(<LittleBoxContainer
                reactBlocks={this.reactBlocks}
                key={x} />);
        }
        return (
            <div id="little_box_container_container">
                {littleBlocks}
            </div>
        );
    }
}

export default LittleBoxContainerContainer;

