import TetrisGameEventActions from "./TetrisGameEventActions";

export default function EventsTetrisController(tetris, id = 0) {
    document.addEventListener('tetris', (event) => {
        if (event.detail.controllerId !== id) {
           return;
        }

        if (tetris.state.isGameOver) {
            switch (event.detail.tetrisAction) {
                case TetrisGameEventActions.Start:
                    tetris.start();
                    break;
                case TetrisGameEventActions.Reset:
                    tetris.reset();
                    break;
                default: break;
            }
        } else {
            switch (event.detail.tetrisAction) {
                case TetrisGameEventActions.Start:
                    tetris.start();
                    break;
                case TetrisGameEventActions.Reset:
                    tetris.reset();
                    break;
                case TetrisGameEventActions.MoveTetrominoDown:
                    tetris.moveTetrominoDown();
                    break;
                case TetrisGameEventActions.MoveTetrominoLeft:
                    tetris.moveTetrominoLeft();
                    break;
                case TetrisGameEventActions.MoveTetrominoRight:
                    tetris.moveTetrominoRight();
                    break;
                case TetrisGameEventActions.ActivateSoftDrop:
                    tetris.activateSoftDrop();
                    break;
                case TetrisGameEventActions.CancelSoftDrop:
                    tetris.cancelSoftDrop();
                    break;
                case TetrisGameEventActions.RotateTetromino:
                    tetris.rotateTetromino();
                    break;
                default: break;
            }
        }
    })
}