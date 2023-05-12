import Block from "../Block";
import "./TetrisPlayField.scss";
import BlockTypes from "tetris-core/BlockTypes.js";
import GameOverScreen from "../GameOverScreen";

export default function TetrisPlayField({ state }) {

    function renderFixedBlocks() {
        return state && state.field.map((row, i) =>
            row.map((block, j) => {
                if (block === BlockTypes.None) {
                    return undefined;
                }
                return (
                    <div key={11 - i + j} className={"__block _block-color_" + block}
                        style={{
                            gridColumn: j + 1,
                            gridRow: i + 1
                        }}>
                    </div>
                )
            })
        )
    }

    function renderActiveTetromino() {
        return state && state.activeTetromino.blocks.map((row, i) =>
            row.map((block, j) => {
                if (block === 0) return undefined;
                return (
                    <Block key={34 - i + j}
                        x={state.activeTetromino.x + j + 1}
                        y={state.activeTetromino.y + i + 1}
                        color={block} />
                )
            })
        )
    }

    console.log(state?.isGameOver);
    return (
        <div className="__game-field-container">
            <div className="__game-field">
                <GameOverScreen isGameOver={state?.isGameOver} />
                {renderActiveTetromino()}
                {renderFixedBlocks()}
            </div>
        </div>
    )
} 