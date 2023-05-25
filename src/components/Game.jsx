import React from "react";

import GrabZone from "./atoms/GrabZone";

import "../styles/components/game.scss";

// React Components

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            debug: false,
            cursorGrabbed: false,
            gameOver: false,
        };

        this.handleToggleDebug = this.handleToggleDebug.bind(this);
        this.handleButtonClicked = this.handleButtonClicked.bind(this);
        this.handleCursorGrabbed = this.handleCursorGrabbed.bind(this);
    }

    handleToggleDebug() {
        this.setState({
            debug: !this.state.debug,
        });
    }

    handleCursorGrabbed() {
        this.setState({
            cursorGrabbed: true,
        });
        setTimeout(() => {
            this.setState({
                cursorGrabbed: false,
            });
        }, 2000);
    }

    handleButtonClicked() {
        this.setState({
            gameOver: true,
        });
        setTimeout(() => {
            this.setState({
                gameOver: false,
            });
        }, 4000);
    }

    render() {
        const { cursorGrabbed, gameOver, debug } = this.state;
        const screenStyle = cursorGrabbed ? { cursor: "none" } : {};
        const appClass = debug ? "app app--debug" : "game";

        return (
            <div className={appClass} style={screenStyle}>
                <button className="trap-button" onClick={this.handleButtonClicked}>
                    {gameOver && "Nice one"}
                    {cursorGrabbed && "Gotcha!"}
                    {!gameOver && !cursorGrabbed && "Button!"}
                </button>

                <div className="grab-zone-wrapper">
                    <GrabZone
                        onCursorGrabbed={this.handleCursorGrabbed}
                        cursorGrabbed={cursorGrabbed}
                        gameOver={gameOver}
                    />
                </div>
            </div>
        );
    }
}

export default Game;
