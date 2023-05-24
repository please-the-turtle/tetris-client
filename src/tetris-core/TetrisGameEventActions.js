const TetrisGameEventActions = Object.freeze({
    None: "none",
    Start: "start",
    Reset: "reset",
    MoveTetrominoDown: "move-down",
    MoveTetrominoRight: "move-right",
    MoveTetrominoLeft: "move-left",
    RotateTetromino: "rotate",
    ActivateSoftDrop: "activate-soft-drop",
    CancelSoftDrop: "cancel-soft-drop",
})

export default TetrisGameEventActions;