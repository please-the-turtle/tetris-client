import Overlay from "components/Overlay";

export default function GameOverScreen({ isGameOver }) {
    return (
        <Overlay isHidden={!isGameOver}>
            <h1>GAME OVER</h1>
            <button onClick={() => document.dispatchEvent(
                new KeyboardEvent('keydown', { 'code': 'Enter' }))}>
                restart
            </button>
        </Overlay>
    )
}