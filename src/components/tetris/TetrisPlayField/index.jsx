import Block from "../Block";
import "./TetrisPlayField.scss";
import GameOverScreen from "../GameOverScreen";

export default function TetrisPlayField({ state }) {

    function renderFixedBlocks() {
        return state && state.field.map((row, i) =>
            row.map((block, j) => {
                return (
                    <Block key={88 - i + j}
                        x={j + 1}
                        y={i + 1}
                        color={block} />
                )
            })
        )
    }

    function renderActiveTetromino() {
        return state && state.activeTetromino.blocks.map((row, i) =>
            row.map((block, j) => {
                let xPos = state.activeTetromino.x + j + 1;
                let yPos = state.activeTetromino.y + i + 1;
                return ( 
                    isOutsideField(xPos, yPos) ? undefined :
                    <Block key={34 - i + j}
                        x={xPos}
                        y={yPos}
                        color={block} />
                )
            })
        )
    }

    function isOutsideField(x, y) {
        const fieldWidth = 10;
        const fieldHeight = 20;
        return x < 1 || x > fieldWidth || y < 1 || y > fieldHeight;
    }

    return (
        <div className="game-field__container">
            <div className="game-field">
                <GameOverScreen isGameOver={state?.isGameOver} />
                {renderFixedBlocks()}
                {renderActiveTetromino()}
            </div>
        </div>
    )
} 