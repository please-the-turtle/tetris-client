import TetrisPlayField from "../TetrisPlayField";
import TetrisScoreCounter from "../TetrisScoreCounter";
import TetrisLevelCounter from  "../TetrisLevelCounter";
import "./TetrisSessionContainer.scss"
import TetrisNextTetrominoCard from "../TetrisNextTetrominoCard";

export default function TetrisSessionContainer({ playerState, rivalState }) {
    return (
        <div className="game-container">
            <section className="main-area">
                <TetrisPlayField state={playerState} />
                <TetrisScoreCounter scoreCount={playerState?.score} />
            </section>
            <section className="side-area">
                {
                    rivalState &&
                    <>
                        <TetrisPlayField state={rivalState} />
                        <TetrisScoreCounter tetrisState={rivalState} />
                    </>
                }
                <TetrisLevelCounter levelCount={playerState?.level} />
                <TetrisNextTetrominoCard nextTetromino={playerState?.nextTetromino} />
            </section>
        </div>
    )
}