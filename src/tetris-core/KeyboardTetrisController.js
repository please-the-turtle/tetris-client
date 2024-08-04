export default function KeyboardTetrisController(tetris) {
    const onkeydown = (event) => {
        switch (event.code) {
            case 'Enter':
                tetris.start();
                break;
            case 'ArrowLeft':
            case 'KeyA':
                tetris.moveTetrominoLeft();
                break;
            case 'ArrowUp':
            case 'KeyW':
                tetris.rotateTetromino();
                break;
            case 'ArrowRight':
            case 'KeyD':
                tetris.moveTetrominoRight();
                break;
            case 'ArrowDown':
            case 'KeyS':
                if (!tetris.state.isSoftDrop) {
                    tetris.moveTetrominoDown();
                    tetris.activateSoftDrop();
                }
                break;
            default: break;
        }
    };

    const onkeyup = (event) => {
        switch (event.code) {
            case 'ArrowDown':
            case 'KeyS':
                tetris.cancelSoftDrop();
                break;
            default: break;
        }
    };

    document.addEventListener('keydown', onkeydown)
    document.addEventListener('keyup', onkeyup)

    const dispose = () => {
        document.removeEventListener('keydown', onkeydown)
        document.removeEventListener('keyup', onkeyup)
    } 

    return {
        dispose,
    }
} 