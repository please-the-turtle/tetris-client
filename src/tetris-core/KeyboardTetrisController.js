export default function KeyboardTetrisController(tetris) {
    document.addEventListener('keydown', (event) => {
        if (tetris.state.isGameOver) {
            switch (event.code) {
                case 'Enter':
                    if (tetris.state.isGameOver) {
                        tetris.start();
                    }
                    break;
                default: break;
            }
        } else {
            switch (event.code) {
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
            };
        }
    })

    document.addEventListener('keyup', (event) => {
        switch (event.code) {
            case 'ArrowDown':
            case 'KeyS':
                tetris.cancelSoftDrop();
                break;
            default: break;
        }
    })
} 