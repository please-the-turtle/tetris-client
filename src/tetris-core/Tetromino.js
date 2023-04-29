import { produce } from "immer";
import BlockTypes from "./BlockTypes";

/**
 * Provides tetramino object and functions to with it.
 * @param {TetrominoType of Tetromino to create.} type 
 * @returns Tetramino object. 
 */
export default function Tetromino(type) {
    let x = 0;
    let y = 0;
    const color = type.block;
    let blocks = type.pattern.map(row => {
        return row.map(block => {
            return block === 0 ? BlockTypes.None : color;
        })
    });

    /**
     * Rotates Tetrimino 90 degrees.
     * @param {Direction of rotation.} clockwise 
     */
    function rotate(clockwise = true) {
        const width = this.width;
        const height = this.height;

        blocks = produce(blocks, draft => {
            clockwise ? blocks.forEach((cols, i) => {
                cols.forEach((block, j) => {
                    draft[j][width - 1 - i] = block;
                })
            }) : blocks.forEach((cols, i) => {
                cols.forEach((block, j) => {
                    draft[height - 1 - j][i] = block;
                })
            })
        })
    }

    return {
        /**
         * Global horizontal position of the top left block.
         */
        set x(value) {
            x = value;
        },

        get x() {
            return x;
        },

        /**
        * Global vertical position of the top left block.
        */
        set y(value) {
            y = value;
        },

        get y() {
            return y;
        },

        get width() {
            return blocks[0].length;
        },

        get height() {
            return blocks.length;
        },

        get color() {
            return color;
        },

        get blocks() {
            return blocks;
        },

        rotate,
    }
}