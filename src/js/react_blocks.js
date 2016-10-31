import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MetalClank from './audio/metal_clank';
import RobotVoice from './audio/robot_voice';
import GameScore from './comp/game_score';
import GameBoard from './game_matrix/game_board';

class ReactBlocks extends Component {

    static debug = true;
    static superDebug = false;

    constructor(props) {
        console.debug("ReactBlocks");
        super(props);
        this.littleBoxContainers = [];
    }

    setLittleBoxContainer(x, cont) {
        this.littleBoxContainers[x] = cont;
    }

    removeBoxes() {
        for(var cont of this.littleBoxContainers){
            cont.removeBoxes();
        }
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
                <GameBoard
                    reactBlocks={this}
                    ref={(gameBoard) => this.gameBoard = gameBoard} />
            </div>
        );
    }
}

ReactDOM.render(<ReactBlocks />, document.getElementById('react_container'));



