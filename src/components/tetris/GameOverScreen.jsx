import Overlay from "components/Overlay";
import TetrisGameEvent from "tetris-core/TetrisGameEvent";
import TetrisGameEventActions from "tetris-core/TetrisGameEventActions";

export default function GameOverScreen({ isGameOver }) {
    return (
        <Overlay isHidden={!isGameOver}>
            <h1>GAME OVER</h1>
            <button onClick={() => document.dispatchEvent(
                TetrisGameEvent(TetrisGameEventActions.Start)
            )}>
                restart
            </button>
        </Overlay>
    )
}