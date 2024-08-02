import { getStatistics } from "../../services/statisticsService";
import HighscoresTable from "../HighscoresTable";
import { useEffect, useState } from "react";
import "./StatisticsPanel.scss"

export default function StatisticsPanel() {
    const [statistics, setStatistics] = useState();
    
    useEffect(() => {
        setStatistics(getStatistics());
        console.log(statistics);
    }, [])

    return (
        <div className="stastistics">
            <div className="statistics-line">
                <div className="statistics-line-header">📓 Average score: </div>
                <div className="statistics-line-value">{statistics?.avgScore}</div>
            </div>
            <div className="statistics-line">
                <div className="statistics-line-header">🕹️ Games played:</div>
                <div className="statistics-line-value">{statistics?.gamesCount}</div>
            </div>
            <HighscoresTable scores={statistics?.scores} />
        </div>
    )
}