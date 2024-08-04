import Point2d from "./Point2d";

export default function GesturesTetrisController(tetris) {
    const moveTetrominoThreshold = 30;
    const dropTetrominoThreshold = 30;
    let lastTouchPosition = null;
    let offset = Point2d(0, 0);
    let isMoved = false;

    const ontouchmove = (event) => {
        event.preventDefault();

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
    };

    const ontouchstart = (event) => {
        lastTouchPosition = getCurrentTouchPosition(event)
        offset = Point2d(0, 0);
        isMoved = false;
    };

    const ontouchend = () => {
        if (!isMoved) {
            tetris.rotateTetromino();
        }
    };

    const ontouchcancel = () => {
        offset = Point2d(0, 0);
        isMoved = false;
    };

    const dispose = () => {
        document.removeEventListener("touchmove", ontouchmove);
        document.removeEventListener("touchstart", ontouchstart);
        document.removeEventListener("touchend", ontouchend);
        document.removeEventListener("touchcancel", ontouchcancel);
    }

    document.addEventListener("touchmove", ontouchmove, { passive: false });
    document.addEventListener("touchstart", ontouchstart);
    document.addEventListener("touchend", ontouchend);
    document.addEventListener("touchcancel", ontouchcancel);

    function getCurrentTouchPosition(touchEvent) {
        return touchEvent && Point2d(
            touchEvent.touches[0].pageX,
            touchEvent.touches[0].pageY
        );
    }

    return {
        dispose,
    }
}