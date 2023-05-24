import Overlay from "components/Overlay";
import TetrisGameEvent from "tetris-core/TetrisGameEvent";
import TetrisGameEventActions from "tetris-core/TetrisGameEventActions";

export default function StartGameScreen({ isStarted }) {
    return (
        <Overlay isHidden={isStarted}>
            <h1>
                <button onClick={() => {
                    document.dispatchEvent(
                        TetrisGameEvent(TetrisGameEventActions.Start));
                }}>
                    ▶ Play
                </button>    
            </h1>
        </Overlay>
    )
}