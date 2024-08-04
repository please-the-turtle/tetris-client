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
    let isGameStarted = false;
    let activeTetromino = null;
    let nextTetromino = null;
    const stateListeners = [];
    const gameOverListeners = [];

    function start() {
        if (!isGameStoped()) return;

        reset();
        isGameStarted = true;
        tick();
    }

    function dispose() {
        stateListeners.length = 0;
        gameOverListeners.length = 0;
        console.log('disposed')
    }

    function tick() {
        update();
        moveTetrominoDown();

        if (!isGameStoped()) {
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
            onGameOver();
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
        if (isGameStoped()) return;

        activeTetromino.rotate(clockwise);

        if (field.hasCollision(activeTetromino)) {
            activeTetromino.rotate(!clockwise);
        }

        onStateChanged();
    }

    function moveTetrominoLeft() {
        if (isGameStoped()) return;

        activeTetromino.x -= 1;

        if (field.hasCollision(activeTetromino)) {
            activeTetromino.x += 1;
        }

        onStateChanged();
    }

    function moveTetrominoRight() {
        if (isGameStoped()) return;

        activeTetromino.x += 1;

        if (field.hasCollision(activeTetromino)) {
            activeTetromino.x -= 1;
        }

        onStateChanged();
    }

    function moveTetrominoDown() {
        if (isGameStoped()) return;

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

    function addListener(eventName, callback) {
        switch (eventName){
            case 'statechanged':
                stateListeners.push(callback)
                break;
            case 'gameover':
                gameOverListeners.push(callback)
                break;
            default:
                console.error("invalid event name", eventName)
        }
    }

    function removeListener(eventName, callback) {
        switch (eventName){
            case 'statechanged':
                stateListeners.filter(item => item !== callback);
            case 'gameover':
                gameOverListeners.filter(item => item !== callback);
        }
    }

    function onStateChanged() {
        stateListeners.forEach(listener => {
            if (isFunction(listener)) {
                listener.call();
            }
        });
    }

    function onGameOver() {
        gameOverListeners.forEach(listener => {
            if (isFunction(listener)) {
                listener.call();
            }
        });
    }

    function activateSoftDrop() {
        if (isGameStoped()) return;

        isSoftDrop = true;
    }

    function cancelSoftDrop() {
        isSoftDrop = false;
    }

    function isGameStoped() {
        return isGameOver || !isGameStarted;
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
                isGameStarted,
            };
        },

        addListener: addListener,
        removeListener: removeListener,

        moveTetrominoDown,
        moveTetrominoLeft,
        moveTetrominoRight,
        rotateTetromino,
        activateSoftDrop,
        cancelSoftDrop,
        start,
        reset,
        dispose,
    }
}