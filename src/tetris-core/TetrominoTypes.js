import BlockTypes from "./BlockTypes";

/**
 * Describes all accessable pieces.
 * Color describes blocks color.
 * All zero values in tetromino pattern mean an empty block. 
 */
const TetrominoTypes = Object.freeze({
    I: {
        block: BlockTypes.Blue,
        pattern: [
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]
    },
    J: {
        block: BlockTypes.Red,
        pattern: [
            [0, 0, 0],
            [1, 1, 1],
            [0, 0, 1]
        ]
    },
    L: {
        block: BlockTypes.Green,
        pattern: [
            [0, 0, 0],
            [1, 1, 1],
            [1, 0, 0]
        ]
    },
    O: {
        block: BlockTypes.Purple,
        pattern: [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0]
        ]
    },
    S: {
        block: BlockTypes.Orange,
        pattern: [
            [0, 0, 0],
            [0, 1, 1],
            [1, 1, 0]
        ]
    },
    T: {
        block: BlockTypes.Yellow,
        pattern: [
            [0, 0, 0],
            [1, 1, 1],
            [0, 1, 0]
        ]
    },
    Z: {
        block: BlockTypes.Marin,
        pattern: [
            [0, 0, 0],
            [1, 1, 0],
            [0, 1, 1]
        ]
    },
});

export default TetrominoTypes;