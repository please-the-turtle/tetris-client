import BlockTypes from "./BlockTypes";

export default function TetrisField() {
    const columns = 10;
    const rows = 20;

    let blocks = getCleanField();

    function getCleanField() {
        return new Array(rows).fill()
            .map(() => new Array(columns).fill(BlockTypes.None));
    }

    function getLinesToRemove() {
        let lines = [];

        for (let y = rows - 1; y >= 0; y--) {
            let numberOfBlocks = 0;

            for (let x = 0; x < columns; x++) {
                if (blocks[y][x] !== BlockTypes.None) {
                    numberOfBlocks += 1;
                }
            }

            if (numberOfBlocks === 0) {
                break;
            } else if (numberOfBlocks < columns) {
                continue;
            } else if (numberOfBlocks === columns) {
                lines.unshift(y);
            }
        }

        return lines;
    }

    function removeLines(lines) {
        for (let index of lines) {
            blocks.splice(index, 1);
            blocks.unshift(new Array(columns).fill(BlockTypes.None));
        }

        return lines.length;
    }

    function isOutOfBounds(x, y) {
        return blocks[y] === undefined || blocks[y][x] === undefined;
    }

    function isOccupied(x, y) {
        return blocks[y][x] !== BlockTypes.None;
    }

    return ({
        get blocks() {
            return blocks;
        },

        get width() {
            return columns;
        },

        get height() {
            return rows;
        },

        hasCollision(tetromino) {
            for (let y = 0; y < tetromino.height; y++) {
                for (let x = 0; x < tetromino.width; x++) {
                    const blockX = tetromino.x + x;
                    const blockY = tetromino.y + y;
                    if (tetromino.blocks[y][x] !== BlockTypes.None &&
                        (isOutOfBounds(blockX, blockY) || isOccupied(blockX, blockY))) {
                        return true;
                    }
                }
            }

            return false;
        },

        /**
         * Fixes tetromino on the game field.
         * @param tetromino 
         * Tetromino for fixing on the field.
         */
        fixTetromino(tetromino) {
            tetromino.blocks.forEach((row, y) => {
                row.forEach((block, x) => {
                    if (block !== BlockTypes.None) {
                        blocks[tetromino.y + y][tetromino.x + x] = block;
                    }
                });
            })
        },

        /**
         * Clears filled lines.
         * @returns Number of removed lines.
         */
        clearFilledLines() {
            const linesToRemove = getLinesToRemove();

            return removeLines(linesToRemove);
        },

        clear() {
            blocks = getCleanField();
        }
    })
}