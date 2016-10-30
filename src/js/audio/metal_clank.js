import React, { Component } from 'react';

class MetalClank extends Component {

    constructor(props) {
        super(props);
        console.debug("MetalClank");
    }

    play() {
        this.audio.load();
        this.audio.play();
    }

    render() {
        return (
            <audio async id='metal_clank'
                   ref={(audio) => this.audio = audio} >
                <source
                    src="https://raw.githubusercontent.com/richwandell/jame_game/master/metal-clank.mp3"
                    type="audio/mpeg" />
            </audio>
        );
    }
}

export default MetalClank;