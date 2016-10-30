import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MetalClank from './audio/metal_clank';
import RobotVoice from './audio/robot_voice';
import GameScore from './comp/game_score';
import LittleBoxContainerContainer from './little_box/little_box_container_container';

class ReactBlocks extends Component {

    constructor(props) {
        super(props);
        console.debug("ReactBlocks");
    }

    render() {
        return (
            <div id="game_container">
                <MetalClank
                    ref={(clank) => this.metalClank = clank} />
                <RobotVoice
                    ref={(robot) => this.robotVoice = robot} />
                <GameScore
                    ref={(score) => this.gameScore = score} />
                <LittleBoxContainerContainer
                    reactBlocks={this}
                    ref={(container) => this.container = container} />
            </div>
        );
    }
}

ReactDOM.render(<ReactBlocks />, $('#react_container')[0]);



