import SquareCard from "components/SquareCard"
import "./TetrisLevelCounter.scss"

export default function TetrisLevelCounter({ levelCount = 0 }) {
    return (
        <SquareCard header="level">
            <div className="level-counter">
                {levelCount}
            </div>
        </SquareCard>
    )
}