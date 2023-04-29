import TetrisField from "./TetrisField";
import Tetromino from "./Tetromino";
import TetrominoRandomizer from "./TetrominoRandomizer";
import TetrisScorer from "./TetrisScorer"

export default function Tetris(seed) {
    const randomizer = TetrominoRandomizer(seed);
    const field = TetrisField();
    const scorer = TetrisScorer();
    const softDropAcceleration = 3;
    let isSoftDrop = false;
    let isGameOver = false;
    let activeTetromino = null;
    let nextTetromino = null;
    const listeners = [];

    function start() {
        reset();
        tick();
    }

    function tick() {
        update();
        moveTetrominoDown();

        if (!isGameOver) {
            setTimeout(() => tick(), getTickTime());
        }
    }

    function update() {
        const clearedLines = field.clearFilledLines();

        if (clearedLines > 0) {
            scorer.addClearedLines(clearedLines);
        }

        if (field.hasCollision(activeTetromino)) {
            isGameOver = true;
            onStateChanged();
        }
    }

    /**
     * Calculates the time between the tetromino going down.
     * @returns time in milliseconds.
     */
    function getTickTime() {
        let tickTime = 325 - 25 * scorer.level;

        if (tickTime < 100) tickTime = 100;

        return isSoftDrop ?
            tickTime / softDropAcceleration :
            tickTime;
    }

    function rotateTetromino(clockwise = true) {
        activeTetromino.rotate(clockwise);

        if (field.hasCollision(activeTetromino)) {
            activeTetromino.rotate(!clockwise);
        }

        onStateChanged();
    }

    function moveTetrominoLeft() {
        activeTetromino.x -= 1;

        if (field.hasCollision(activeTetromino)) {
            activeTetromino.x += 1;
        }

        onStateChanged();
    }

    function moveTetrominoRight() {
        activeTetromino.x += 1;

        if (field.hasCollision(activeTetromino)) {
            activeTetromino.x -= 1;
        }

        onStateChanged();
    }

    function moveTetrominoDown() {
        if (isGameOver) return;
        activeTetromino.y += 1;

        if (field.hasCollision(activeTetromino)) {
            activeTetromino.y -= 1;
            field.fixTetromino(activeTetromino);
            updateTetrominoes();
        }

        onStateChanged();
    }

    function reset() {
        field.clear();
        scorer.reset();
        updateTetrominoes();
        isGameOver = false;

        onStateChanged();
    }

    function updateTetrominoes() {
        activeTetromino = nextTetromino || Tetromino(randomizer.getRandomType());
        nextTetromino = Tetromino(randomizer.getRandomType());
        activeTetromino.x = Math.floor((field.width - activeTetromino.width) / 2);
        activeTetromino.y = -1;
    }

    function addStateListener(onStateChanged) {
        listeners.push(onStateChanged);
    }

    function removeStateListener(listener) {
        listeners.filter(item => item !== listener);
    }

    function onStateChanged() {
        listeners.forEach(listener => {
            if (isFunction(listener)) {
                listener.call();
            }
        });
    }

    function activateSoftDrop() {
        isSoftDrop = true;
    }

    function cancelSoftDrop() {
        isSoftDrop = false;
    }

    function isFunction(item) {
        return item && {}.toString.call(item) === '[object Function]'
    }

    return {
        get state() {
            return {
                score: scorer.score,
                clearedLines: scorer.clearedLines,
                level: scorer.level,
                field: field.blocks,
                activeTetromino,
                nextTetromino,
                isSoftDrop,
                isGameOver,
            };
        },

        addStateListener,
        removeStateListener,

        moveTetrominoDown,
        moveTetrominoLeft,
        moveTetrominoRight,
        rotateTetromino,
        activateSoftDrop,
        cancelSoftDrop,
        start,
        reset,
    }
}