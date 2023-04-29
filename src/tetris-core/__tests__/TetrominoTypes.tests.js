import TetrominoTypes from "tetris-core/TetrominoTypes";
import BlockTypes from "tetris-core/BlockTypes";

describe('TetrominoTypes tests', () => {

    test('Get J', () => {
        expect(TetrominoTypes.J.block).toEqual(BlockTypes.Red)
        expect(TetrominoTypes.J.pattern).toEqual(
            [
                [0,0,0],
                [1,1,1],
                [0,0,1]
            ]
        )
    })

    test('Get I', () => {
        expect(TetrominoTypes.I.block).toEqual(BlockTypes.Blue)
        expect(TetrominoTypes.I.pattern).toEqual(
            [
                [0,0,0,0],
                [1,1,1,1],
                [0,0,0,0],
                [0,0,0,0]
            ]
        )
    })

    test('Get L', () => {
        expect(TetrominoTypes.L.block).toEqual(BlockTypes.Green)
        expect(TetrominoTypes.L.pattern).toEqual(
            [
                [0,0,0],
                [1,1,1],
                [1,0,0]
            ]
        )
    })

    test('Get O', () => {
        expect(TetrominoTypes.O.block).toEqual(BlockTypes.Purple)
        expect(TetrominoTypes.O.pattern).toEqual(
            [
                [0,0,0,0],
                [0,1,1,0],
                [0,1,1,0],
                [0,0,0,0]
            ]
        )
    })

    test('Get S', () => {
        expect(TetrominoTypes.S.block).toEqual(BlockTypes.Orange)
        expect(TetrominoTypes.S.pattern).toEqual(
            [
                [0,0,0],
                [0,1,1],
                [1,1,0]
            ]
        )
    })

    test('Get T', () => {
        expect(TetrominoTypes.T.block).toEqual(BlockTypes.Yellow)
        expect(TetrominoTypes.T.pattern).toEqual(
            [
                [0,0,0],
                [1,1,1],
                [0,1,0]
            ]
        )
    })

    test('Get Z', () => {
        expect(TetrominoTypes.Z.block).toEqual(BlockTypes.Marin)
        expect(TetrominoTypes.Z.pattern).toEqual(
            [
                [0,0,0],
                [1,1,0],
                [0,1,1]
            ]
        )
    })

    test('Get unknown tetromino', () => {
        expect(TetrominoTypes.A).toBe(undefined)
        expect(() => TetrominoTypes.A.block).toThrowError(TypeError)
        expect(() => TetrominoTypes.A.pattern).toThrowError(TypeError)
    })

})
