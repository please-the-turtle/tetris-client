import BlockTypes from "tetris-core/BlockTypes";
import Tetromino from "tetris-core/Tetromino";
import TetrominoTypes from "tetris-core/TetrominoTypes";

describe('Tetromino tests', () => {

    test('Get x', () => {
        const tetromino = Tetromino(TetrominoTypes.I);
        expect(tetromino.x).toBe(0);
    })

    test('Set x', () => {
        const tetromino = Tetromino(TetrominoTypes.I);
        tetromino.x = 5;
        expect(tetromino.x).toBe(5);
    })

    test('Get y', () => {
        const tetromino = Tetromino(TetrominoTypes.I);
        expect(tetromino.y).toBe(0);
    })

    test('Set y', () => {
        const tetromino = Tetromino(TetrominoTypes.I);
        tetromino.y = 5;
        expect(tetromino.y).toBe(5);
    })

    test('Get width', () => {
        const tetromino = Tetromino(TetrominoTypes.I);
        const expectedWidth = 4;
        expect(tetromino.width).toBe(expectedWidth);
    })

    test('Width cannot be set', () => {
        const tetromino = Tetromino(TetrominoTypes.I);
        expect(() => { tetromino.width = 2 }).toThrowError();
    })

    test('Get height', () => {
        const tetromino = Tetromino(TetrominoTypes.I);
        const expectedHeight = 4;
        expect(tetromino.height).toBe(expectedHeight);
    })

    test('Height cannot be set', () => {
        const tetromino = Tetromino(TetrominoTypes.I);
        expect(() => { tetromino.height = 2 }).toThrowError();
    })

    test('Get color', () => {
        const tetromino = Tetromino(TetrominoTypes.I);
        const expectedColor = BlockTypes.Blue;
        expect(tetromino.color).toBe(expectedColor);
    })

    test('Color cannot be set', () => {
        const tetromino = Tetromino(TetrominoTypes.I);
        expect(() => { tetromino.color = BlockTypes.None }).toThrowError();
    })

    test('Rotate I tetromino clockwise', () => {
        const tetromino = Tetromino(TetrominoTypes.I);
        tetromino.rotate(true);
        expect(tetromino.blocks).toEqual([
            [BlockTypes.None, BlockTypes.None, tetromino.color, BlockTypes.None],
            [BlockTypes.None, BlockTypes.None, tetromino.color, BlockTypes.None],
            [BlockTypes.None, BlockTypes.None, tetromino.color, BlockTypes.None],
            [BlockTypes.None, BlockTypes.None, tetromino.color, BlockTypes.None],
        ]);
        tetromino.rotate(true);
        expect(tetromino.blocks).toEqual([
            [BlockTypes.None, BlockTypes.None, BlockTypes.None, BlockTypes.None],
            [BlockTypes.None, BlockTypes.None, BlockTypes.None, BlockTypes.None],
            [tetromino.color, tetromino.color, tetromino.color, tetromino.color],
            [BlockTypes.None, BlockTypes.None, BlockTypes.None, BlockTypes.None],
        ]);
        tetromino.rotate(true);
        expect(tetromino.blocks).toEqual([
            [BlockTypes.None, tetromino.color, BlockTypes.None, BlockTypes.None],
            [BlockTypes.None, tetromino.color, BlockTypes.None, BlockTypes.None],
            [BlockTypes.None, tetromino.color, BlockTypes.None, BlockTypes.None],
            [BlockTypes.None, tetromino.color, BlockTypes.None, BlockTypes.None],
        ]);
        tetromino.rotate(true);
        expect(tetromino.blocks).toEqual([
            [BlockTypes.None, BlockTypes.None, BlockTypes.None, BlockTypes.None],
            [tetromino.color, tetromino.color, tetromino.color, tetromino.color],
            [BlockTypes.None, BlockTypes.None, BlockTypes.None, BlockTypes.None],
            [BlockTypes.None, BlockTypes.None, BlockTypes.None, BlockTypes.None],
        ]);
    })

    test('Rotate I tetromino counter-clockwise', () => {
        const tetromino = Tetromino(TetrominoTypes.I);
        tetromino.rotate(false);
        expect(tetromino.blocks).toEqual([
            [BlockTypes.None, tetromino.color, BlockTypes.None, BlockTypes.None],
            [BlockTypes.None, tetromino.color, BlockTypes.None, BlockTypes.None],
            [BlockTypes.None, tetromino.color, BlockTypes.None, BlockTypes.None],
            [BlockTypes.None, tetromino.color, BlockTypes.None, BlockTypes.None],
        ]);
        tetromino.rotate(false);
        expect(tetromino.blocks).toEqual([
            [BlockTypes.None, BlockTypes.None, BlockTypes.None, BlockTypes.None],
            [BlockTypes.None, BlockTypes.None, BlockTypes.None, BlockTypes.None],
            [tetromino.color, tetromino.color, tetromino.color, tetromino.color],
            [BlockTypes.None, BlockTypes.None, BlockTypes.None, BlockTypes.None],
        ]);
        tetromino.rotate(false);
        expect(tetromino.blocks).toEqual([
            [BlockTypes.None, BlockTypes.None, tetromino.color, BlockTypes.None],
            [BlockTypes.None, BlockTypes.None, tetromino.color, BlockTypes.None],
            [BlockTypes.None, BlockTypes.None, tetromino.color, BlockTypes.None],
            [BlockTypes.None, BlockTypes.None, tetromino.color, BlockTypes.None],
        ]);
        tetromino.rotate(false);
        expect(tetromino.blocks).toEqual([
            [BlockTypes.None, BlockTypes.None, BlockTypes.None, BlockTypes.None],
            [tetromino.color, tetromino.color, tetromino.color, tetromino.color],
            [BlockTypes.None, BlockTypes.None, BlockTypes.None, BlockTypes.None],
            [BlockTypes.None, BlockTypes.None, BlockTypes.None, BlockTypes.None],
        ]);
    })

    test('Rotate J tetromino clockwise', () => {
        const tetromino = Tetromino(TetrominoTypes.J);
        tetromino.rotate(true);
        expect(tetromino.blocks).toEqual([
            [BlockTypes.None, tetromino.color, BlockTypes.None],
            [BlockTypes.None, tetromino.color, BlockTypes.None],
            [tetromino.color, tetromino.color, BlockTypes.None]
        ]);
        tetromino.rotate(true);
        expect(tetromino.blocks).toEqual([
            [tetromino.color, BlockTypes.None, BlockTypes.None],
            [tetromino.color, tetromino.color, tetromino.color],
            [BlockTypes.None, BlockTypes.None, BlockTypes.None]
        ]);
        tetromino.rotate(true);
        expect(tetromino.blocks).toEqual([
            [BlockTypes.None, tetromino.color, tetromino.color],
            [BlockTypes.None, tetromino.color, BlockTypes.None],
            [BlockTypes.None, tetromino.color, BlockTypes.None]
        ]);
        tetromino.rotate(true);
        expect(tetromino.blocks).toEqual([
            [BlockTypes.None, BlockTypes.None, BlockTypes.None],
            [tetromino.color, tetromino.color, tetromino.color],
            [BlockTypes.None, BlockTypes.None, tetromino.color]
        ]);
    })

    test('Rotate J tetromino counter-clockwise', () => {
        const tetromino = Tetromino(TetrominoTypes.J);
        tetromino.rotate(false);
        expect(tetromino.blocks).toEqual([
            [BlockTypes.None, tetromino.color, tetromino.color],
            [BlockTypes.None, tetromino.color, BlockTypes.None],
            [BlockTypes.None, tetromino.color, BlockTypes.None]
        ]);
        tetromino.rotate(false);
        expect(tetromino.blocks).toEqual([
            [tetromino.color, BlockTypes.None, BlockTypes.None],
            [tetromino.color, tetromino.color, tetromino.color],
            [BlockTypes.None, BlockTypes.None, BlockTypes.None]
        ]);
        tetromino.rotate(false);
        expect(tetromino.blocks).toEqual([
            [BlockTypes.None, tetromino.color, BlockTypes.None],
            [BlockTypes.None, tetromino.color, BlockTypes.None],
            [tetromino.color, tetromino.color, BlockTypes.None]
        ]);
        tetromino.rotate(false);
        expect(tetromino.blocks).toEqual([
            [BlockTypes.None, BlockTypes.None, BlockTypes.None],
            [tetromino.color, tetromino.color, tetromino.color],
            [BlockTypes.None, BlockTypes.None, tetromino.color]
        ]);
    })

    test('Rotate L tetromino clockwise', () => {
        const tetromino = Tetromino(TetrominoTypes.L);
        tetromino.rotate(true);
        expect(tetromino.blocks).toEqual([
            [tetromino.color, tetromino.color, BlockTypes.None],
            [BlockTypes.None, tetromino.color, BlockTypes.None],
            [BlockTypes.None, tetromino.color, BlockTypes.None]
        ]);
        tetromino.rotate(true);
        expect(tetromino.blocks).toEqual([
            [BlockTypes.None, BlockTypes.None, tetromino.color],
            [tetromino.color, tetromino.color, tetromino.color],
            [BlockTypes.None, BlockTypes.None, BlockTypes.None]
        ]);
        tetromino.rotate(true);
        expect(tetromino.blocks).toEqual([
            [BlockTypes.None, tetromino.color, BlockTypes.None],
            [BlockTypes.None, tetromino.color, BlockTypes.None],
            [BlockTypes.None, tetromino.color, tetromino.color]
        ]);
        tetromino.rotate(true);
        expect(tetromino.blocks).toEqual([
            [BlockTypes.None, BlockTypes.None, BlockTypes.None],
            [tetromino.color, tetromino.color, tetromino.color],
            [tetromino.color, BlockTypes.None, BlockTypes.None]
        ]);

    })

    test('Rotate L tetromino counter-clockwise', () => {
        const tetromino = Tetromino(TetrominoTypes.L);
        tetromino.rotate(false);
        expect(tetromino.blocks).toEqual([
            [BlockTypes.None, tetromino.color, BlockTypes.None],
            [BlockTypes.None, tetromino.color, BlockTypes.None],
            [BlockTypes.None, tetromino.color, tetromino.color]
        ]);
        tetromino.rotate(false);
        expect(tetromino.blocks).toEqual([
            [BlockTypes.None, BlockTypes.None, tetromino.color],
            [tetromino.color, tetromino.color, tetromino.color],
            [BlockTypes.None, BlockTypes.None, BlockTypes.None]
        ]);
        tetromino.rotate(false);
        expect(tetromino.blocks).toEqual([
            [tetromino.color, tetromino.color, BlockTypes.None],
            [BlockTypes.None, tetromino.color, BlockTypes.None],
            [BlockTypes.None, tetromino.color, BlockTypes.None]
        ]);
        tetromino.rotate(false);
        expect(tetromino.blocks).toEqual([
            [BlockTypes.None, BlockTypes.None, BlockTypes.None],
            [tetromino.color, tetromino.color, tetromino.color],
            [tetromino.color, BlockTypes.None, BlockTypes.None]
        ]);
    })

    test('Rotate O tetromino clockwise', () => {
        const tetromino = Tetromino(TetrominoTypes.O);
        tetromino.rotate(true);
        expect(tetromino.blocks).toEqual([
            [BlockTypes.None, BlockTypes.None, BlockTypes.None, BlockTypes.None],
            [BlockTypes.None, tetromino.color, tetromino.color, BlockTypes.None],
            [BlockTypes.None, tetromino.color, tetromino.color, BlockTypes.None],
            [BlockTypes.None, BlockTypes.None, BlockTypes.None, BlockTypes.None]
        ]);
        tetromino.rotate(true);
        expect(tetromino.blocks).toEqual([
            [BlockTypes.None, BlockTypes.None, BlockTypes.None, BlockTypes.None],
            [BlockTypes.None, tetromino.color, tetromino.color, BlockTypes.None],
            [BlockTypes.None, tetromino.color, tetromino.color, BlockTypes.None],
            [BlockTypes.None, BlockTypes.None, BlockTypes.None, BlockTypes.None]
        ]);
        tetromino.rotate(true);
        expect(tetromino.blocks).toEqual([
            [BlockTypes.None, BlockTypes.None, BlockTypes.None, BlockTypes.None],
            [BlockTypes.None, tetromino.color, tetromino.color, BlockTypes.None],
            [BlockTypes.None, tetromino.color, tetromino.color, BlockTypes.None],
            [BlockTypes.None, BlockTypes.None, BlockTypes.None, BlockTypes.None]
        ]);
        tetromino.rotate(true);
        expect(tetromino.blocks).toEqual([
            [BlockTypes.None, BlockTypes.None, BlockTypes.None, BlockTypes.None],
            [BlockTypes.None, tetromino.color, tetromino.color, BlockTypes.None],
            [BlockTypes.None, tetromino.color, tetromino.color, BlockTypes.None],
            [BlockTypes.None, BlockTypes.None, BlockTypes.None, BlockTypes.None]
        ]);

    })

    test('Rotate O tetromino counter-clockwise', () => {
        const tetromino = Tetromino(TetrominoTypes.O);
        tetromino.rotate(false);
        expect(tetromino.blocks).toEqual([
            [BlockTypes.None, BlockTypes.None, BlockTypes.None, BlockTypes.None],
            [BlockTypes.None, tetromino.color, tetromino.color, BlockTypes.None],
            [BlockTypes.None, tetromino.color, tetromino.color, BlockTypes.None],
            [BlockTypes.None, BlockTypes.None, BlockTypes.None, BlockTypes.None]
        ]);
        tetromino.rotate(false);
        expect(tetromino.blocks).toEqual([
            [BlockTypes.None, BlockTypes.None, BlockTypes.None, BlockTypes.None],
            [BlockTypes.None, tetromino.color, tetromino.color, BlockTypes.None],
            [BlockTypes.None, tetromino.color, tetromino.color, BlockTypes.None],
            [BlockTypes.None, BlockTypes.None, BlockTypes.None, BlockTypes.None]
        ]);
        tetromino.rotate(false);
        expect(tetromino.blocks).toEqual([
            [BlockTypes.None, BlockTypes.None, BlockTypes.None, BlockTypes.None],
            [BlockTypes.None, tetromino.color, tetromino.color, BlockTypes.None],
            [BlockTypes.None, tetromino.color, tetromino.color, BlockTypes.None],
            [BlockTypes.None, BlockTypes.None, BlockTypes.None, BlockTypes.None]
        ]);
        tetromino.rotate(false);
        expect(tetromino.blocks).toEqual([
            [BlockTypes.None, BlockTypes.None, BlockTypes.None, BlockTypes.None],
            [BlockTypes.None, tetromino.color, tetromino.color, BlockTypes.None],
            [BlockTypes.None, tetromino.color, tetromino.color, BlockTypes.None],
            [BlockTypes.None, BlockTypes.None, BlockTypes.None, BlockTypes.None]
        ]);
    })

    test('Rotate S tetromino clockwise', () => {
        const tetromino = Tetromino(TetrominoTypes.S);
        tetromino.rotate(true);
        expect(tetromino.blocks).toEqual([
            [tetromino.color, BlockTypes.None, BlockTypes.None],
            [tetromino.color, tetromino.color, BlockTypes.None],
            [BlockTypes.None, tetromino.color, BlockTypes.None]
        ]);
        tetromino.rotate(true);
        expect(tetromino.blocks).toEqual([
            [BlockTypes.None, tetromino.color, tetromino.color],
            [tetromino.color, tetromino.color, BlockTypes.None],
            [BlockTypes.None, BlockTypes.None, BlockTypes.None]
        ]);
        tetromino.rotate(true);
        expect(tetromino.blocks).toEqual([
            [BlockTypes.None, tetromino.color, BlockTypes.None],
            [BlockTypes.None, tetromino.color, tetromino.color],
            [BlockTypes.None, BlockTypes.None, tetromino.color]
        ]);
        tetromino.rotate(true);
        expect(tetromino.blocks).toEqual([
            [BlockTypes.None, BlockTypes.None, BlockTypes.None],
            [BlockTypes.None, tetromino.color, tetromino.color],
            [tetromino.color, tetromino.color, BlockTypes.None]
        ]);

    })

    test('Rotate S tetromino counter-clockwise', () => {
        const tetromino = Tetromino(TetrominoTypes.S);
        tetromino.rotate(false);
        expect(tetromino.blocks).toEqual([
            [BlockTypes.None, tetromino.color, BlockTypes.None],
            [BlockTypes.None, tetromino.color, tetromino.color],
            [BlockTypes.None, BlockTypes.None, tetromino.color]
        ]);
        tetromino.rotate(false);
        expect(tetromino.blocks).toEqual([
            [BlockTypes.None, tetromino.color, tetromino.color],
            [tetromino.color, tetromino.color, BlockTypes.None],
            [BlockTypes.None, BlockTypes.None, BlockTypes.None]
        ]);
        tetromino.rotate(false);
        expect(tetromino.blocks).toEqual([
            [tetromino.color, BlockTypes.None, BlockTypes.None],
            [tetromino.color, tetromino.color, BlockTypes.None],
            [BlockTypes.None, tetromino.color, BlockTypes.None]
        ]);
        tetromino.rotate(false);
        expect(tetromino.blocks).toEqual([
            [BlockTypes.None, BlockTypes.None, BlockTypes.None],
            [BlockTypes.None, tetromino.color, tetromino.color],
            [tetromino.color, tetromino.color, BlockTypes.None]
        ]);
    })

    test('Rotate T tetromino clockwise', () => {
        const tetromino = Tetromino(TetrominoTypes.T);
        tetromino.rotate(true);
        expect(tetromino.blocks).toEqual([
            [BlockTypes.None, tetromino.color, BlockTypes.None],
            [tetromino.color, tetromino.color, BlockTypes.None],
            [BlockTypes.None, tetromino.color, BlockTypes.None]
        ]);
        tetromino.rotate(true);
        expect(tetromino.blocks).toEqual([
            [BlockTypes.None, tetromino.color, BlockTypes.None],
            [tetromino.color, tetromino.color, tetromino.color],
            [BlockTypes.None, BlockTypes.None, BlockTypes.None]
        ]);
        tetromino.rotate(true);
        expect(tetromino.blocks).toEqual([
            [BlockTypes.None, tetromino.color, BlockTypes.None],
            [BlockTypes.None, tetromino.color, tetromino.color],
            [BlockTypes.None, tetromino.color, BlockTypes.None]
        ]);
        tetromino.rotate(true);
        expect(tetromino.blocks).toEqual([
            [BlockTypes.None, BlockTypes.None, BlockTypes.None],
            [tetromino.color, tetromino.color, tetromino.color],
            [BlockTypes.None, tetromino.color, BlockTypes.None]
        ]);

    })

    test('Rotate T tetromino counter-clockwise', () => {
        const tetromino = Tetromino(TetrominoTypes.T);
        tetromino.rotate(false);
        expect(tetromino.blocks).toEqual([
            [BlockTypes.None, tetromino.color, BlockTypes.None],
            [BlockTypes.None, tetromino.color, tetromino.color],
            [BlockTypes.None, tetromino.color, BlockTypes.None]
        ]);
        tetromino.rotate(false);
        expect(tetromino.blocks).toEqual([
            [BlockTypes.None, tetromino.color, BlockTypes.None],
            [tetromino.color, tetromino.color, tetromino.color],
            [BlockTypes.None, BlockTypes.None, BlockTypes.None]
        ]);
        tetromino.rotate(false);
        expect(tetromino.blocks).toEqual([
            [BlockTypes.None, tetromino.color, BlockTypes.None],
            [tetromino.color, tetromino.color, BlockTypes.None],
            [BlockTypes.None, tetromino.color, BlockTypes.None]
        ]);
        tetromino.rotate(false);
        expect(tetromino.blocks).toEqual([
            [BlockTypes.None, BlockTypes.None, BlockTypes.None],
            [tetromino.color, tetromino.color, tetromino.color],
            [BlockTypes.None, tetromino.color, BlockTypes.None]
        ]);
    })

    test('Rotate Z tetromino clockwise', () => {
        const tetromino = Tetromino(TetrominoTypes.Z);
        tetromino.rotate(true);
        expect(tetromino.blocks).toEqual([
            [BlockTypes.None, tetromino.color, BlockTypes.None],
            [tetromino.color, tetromino.color, BlockTypes.None],
            [tetromino.color, BlockTypes.None, BlockTypes.None]
        ]);
        tetromino.rotate(true);
        expect(tetromino.blocks).toEqual([
            [tetromino.color, tetromino.color, BlockTypes.None],
            [BlockTypes.None, tetromino.color, tetromino.color],
            [BlockTypes.None, BlockTypes.None, BlockTypes.None]
        ]);
        tetromino.rotate(true);
        expect(tetromino.blocks).toEqual([
            [BlockTypes.None, BlockTypes.None, tetromino.color],
            [BlockTypes.None, tetromino.color, tetromino.color],
            [BlockTypes.None, tetromino.color, BlockTypes.None]
        ]);
        tetromino.rotate(true);
        expect(tetromino.blocks).toEqual([
            [BlockTypes.None, BlockTypes.None, BlockTypes.None],
            [tetromino.color, tetromino.color, BlockTypes.None],
            [BlockTypes.None, tetromino.color, tetromino.color]
        ]);

    })

    test('Rotate Z tetromino counter-clockwise', () => {
        const tetromino = Tetromino(TetrominoTypes.Z);
        tetromino.rotate(false);
        expect(tetromino.blocks).toEqual([
            [BlockTypes.None, BlockTypes.None, tetromino.color],
            [BlockTypes.None, tetromino.color, tetromino.color],
            [BlockTypes.None, tetromino.color, BlockTypes.None]
        ]);
        tetromino.rotate(false);
        expect(tetromino.blocks).toEqual([
            [tetromino.color, tetromino.color, BlockTypes.None],
            [BlockTypes.None, tetromino.color, tetromino.color],
            [BlockTypes.None, BlockTypes.None, BlockTypes.None]
        ]);
        tetromino.rotate(false);
        expect(tetromino.blocks).toEqual([
            [BlockTypes.None, tetromino.color, BlockTypes.None],
            [tetromino.color, tetromino.color, BlockTypes.None],
            [tetromino.color, BlockTypes.None, BlockTypes.None]
        ]);
        tetromino.rotate(false);
        expect(tetromino.blocks).toEqual([
            [BlockTypes.None, BlockTypes.None, BlockTypes.None],
            [tetromino.color, tetromino.color, BlockTypes.None],
            [BlockTypes.None, tetromino.color, tetromino.color]
        ]);
    })

})