import React, { Component } from 'react';

class RobotVoice extends Component {

    constructor(props) {
        super(props);
        console.debug("RobotVoice");
    }

    play() {
        this.audio.load();
        this.audio.play();
    }


    render() {
        return (
            <audio async id='robot'
                   ref={(audio) => this.audio = audio} >
                <source src="https://raw.githubusercontent.com/richwandell/jame_game/master/robot.mp3" type="audio/mpeg" />
            </audio>
        );
    }
}

export default RobotVoice;