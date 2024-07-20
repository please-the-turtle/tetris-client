import "./Block.scss"

/**
 * Represents a block on the tetris field.
 */
export default function Block({ x, y, color }) {
    return (
        <div key={11 - x + y} className={"block " + color}
            style={{
                gridColumn: x,
                gridRow: y
            }}>
        </div>
    )
}