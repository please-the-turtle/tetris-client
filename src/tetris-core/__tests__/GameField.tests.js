import BlockTypes from "tetris-core/BlockTypes";
import TetrisField from "tetris-core/TetrisField";
import Tetromino from "tetris-core/Tetromino";
import TetrominoTypes from "tetris-core/TetrominoTypes";

describe('GameField tests', () => {

    test('Create game field', () => {
        const field = TetrisField();

        expect(field).toBeDefined();
    })

    test('Clear game field', () => {
        const field = TetrisField();
        field.blocks.forEach(row => {
            row.forEach(block => {
                expect(block).toBe(BlockTypes.None);
            });
        });
    })

    test('Put O tetromino test', () => {
        const field = TetrisField();
        const tetromino = Tetromino(TetrominoTypes.O);

        field.fixTetromino(tetromino);

        expect(field.blocks[1][1]).toBe(BlockTypes.Purple)
        expect(field.blocks[1][2]).toBe(BlockTypes.Purple)
        expect(field.blocks[2][1]).toBe(BlockTypes.Purple)
        expect(field.blocks[2][2]).toBe(BlockTypes.Purple)
    })

    test('Field has no collisions on the start tetromino drop', () => {
        const field = TetrisField();
        const tetromino = Tetromino(TetrominoTypes.O);
        tetromino.y = -1;

        const hasCollision = field.hasCollision(tetromino);

        expect(hasCollision).toBe(false);
    })
})