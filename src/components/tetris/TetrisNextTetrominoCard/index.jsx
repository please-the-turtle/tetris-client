import SquareCard from "components/SquareCard"
import "./TetrisNextTetrominoCard.scss"
import Block from "../Block"

export default function TetrisNextTetrominoCard({ nextTetromino }) {
    return (
        <SquareCard header="next">
            <div className="tetromino-grid">
                {
                    nextTetromino && nextTetromino.blocks.map((row, y) => {
                        return row.map((block, x) => {
                            return (
                            <Block  key={84 - y + x}
                                x={ x + 1 }
                                y={ y + 1 }
                                color={ block } />
                        )})
                    })
                }
            </div>
        </SquareCard>
    )
}