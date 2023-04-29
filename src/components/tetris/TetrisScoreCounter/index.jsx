import './TetrisScore.scss'

export default function TetrisScoreCounter({ scoreCount = 0}) {
    return (
        <section className="tetris-score">
            {scoreCount}
        </section>
    )
}