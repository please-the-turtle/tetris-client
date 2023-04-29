import seedrandom from "seedrandom";
import TetrominoTypes from "./TetrominoTypes";

/**
 * Used for getting random tetromino piece.
 * @param {Seed for generating pseudo random tetromino types.} seed 
 * @returns TetrominoTypes randomizer.
 */
export default function TetrominoRandomizer(seed) {
    const random = seedrandom(seed);

    function getRandomType() {
        const tetrominoTypes = Object.keys(TetrominoTypes);
        const allTetrominoesNumber = tetrominoTypes.length;
        const randomTetrominoIndex = Math.abs(random.int32() % allTetrominoesNumber);
        const randomTetromino = tetrominoTypes[randomTetrominoIndex];
        
        return TetrominoTypes[randomTetromino];
    }

    return {
        getRandomType
    }
}