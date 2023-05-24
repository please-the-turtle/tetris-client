import Point2d from "utils/Point2d";

export default function GesturesTetrisController(tetris) {
    const moveTetrominoThreshold = 30;
    const dropTetrominoThreshold = 30;
    let lastTouchPosition = null;
    let offset = Point2d(0, 0);
    let isMoved = false;

    document.addEventListener("touchmove", event => {
        const currentPosition = getCurrentTouchPosition(event);
        offset.x += lastTouchPosition.x - currentPosition.x;
        offset.y += lastTouchPosition.y - currentPosition.y;
        lastTouchPosition = currentPosition;

        if (offset.y < -dropTetrominoThreshold) {
            tetris.moveTetrominoDown();
            offset = Point2d(0, 0);
            isMoved = true;
            return;
        }

        if (offset.x > moveTetrominoThreshold) {
            tetris.moveTetrominoLeft();
            offset = Point2d(0, 0);
            isMoved = true;
            return;
        }

        if (offset.x < -moveTetrominoThreshold) {
            tetris.moveTetrominoRight();
            offset = Point2d(0, 0);
            isMoved = true;
            return;
        }
    }, false);

    document.addEventListener("touchstart", event => {
        lastTouchPosition = getCurrentTouchPosition(event)
        offset = Point2d(0, 0);
        isMoved = false;
    }, false)

    document.addEventListener("touchend", () => {
        if (!isMoved) {
            tetris.rotateTetromino();
        }
    }, false)

    document.addEventListener("touchcancel", () => {
        offset = Point2d(0, 0);
        isMoved = false;
    }, false)

    function getCurrentTouchPosition(touchEvent) {
        return touchEvent && Point2d(
            touchEvent.touches[0].pageX,
            touchEvent.touches[0].pageY
        );
    }
}