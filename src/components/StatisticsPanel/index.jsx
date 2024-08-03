import HighscoresTable from "../HighscoresTable";
import Card from "../Card"
import "./StatisticsPanel.scss"

export default function StatisticsPanel({ header, statistics }) {
    return (
        <Card header={header}>
            <div className="statistics-line">
                <div className="statistics-line-header">✨ Average score: </div>
                <div className="statistics-line-value">{statistics?.avgScore}</div>
            </div>
            <div className="statistics-line">
                <div className="statistics-line-header">🕹️ Games played:</div>
                <div className="statistics-line-value">{statistics?.gamesCount}</div>
            </div>
            <HighscoresTable scores={statistics?.scores} />
        </Card>
    )
}