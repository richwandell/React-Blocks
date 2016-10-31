import React, { Component } from 'react';

class MetalClank extends Component {

    constructor(props) {
        console.debug("MetalClank");
        super(props);
        this.whichAudio = true;
    }

    play() {
        try {
            if(this.whichAudio){
                this.audio1.pause();
                this.audio1.load();
                this.audio1.play();
                this.whichAudio = !this.whichAudio;
            } else {
                this.audio2.pause();
                this.audio2.load();
                this.audio2.play();
                this.whichAudio = !this.whichAudio;
            }
        }catch(e){}
    }

    render() {
        return (
            <div>
                <audio async
                       ref={(audio) => this.audio1 = audio} >
                    <source
                        src="https://raw.githubusercontent.com/richwandell/jame_game/master/metal-clank.mp3"
                        type="audio/mpeg" />
                </audio>
                <audio async
                       ref={(audio) => this.audio2 = audio} >
                    <source
                        src="https://raw.githubusercontent.com/richwandell/jame_game/master/metal-clank.mp3"
                        type="audio/mpeg" />
                </audio>
            </div>
        );
    }
}

export default MetalClank;