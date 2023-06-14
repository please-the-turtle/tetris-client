import Loading from "components/Loading";
import { useCallback, useEffect, useRef, useState, useTransition } from "react";
import ScoreService from "services/ScoreService";
import "./LeaderboardTable.scss"
import { IoSync } from 'react-icons/io5';
import { Button } from "ariakit";

export default function LeaderboardTable() {
    const scoreService = useRef();
    const [scores, setScores] = useState([]);
    const [isLoading, startLoading] = useTransition()

    const updateLeaderboard = useCallback(() => {
        startLoading(() =>
            scoreService.current?.getLeaderboard()
                .then(response => { setScores(response?.data) })
                .catch(error => console.log(error?.message))
        )
    }, [])

    useEffect(() => {
        scoreService.current = ScoreService();
        updateLeaderboard();
    }, [updateLeaderboard])

    return (
        <section className="leaderboard">
            <article className="leaderboard-header">
                <h1>🎯 Leaderboard</h1>
                <Button onClick={updateLeaderboard}>
                    <IoSync />
                </Button>
            </article>
            <article className="leaderboard-table">
                {isLoading ?
                    <Loading /> :
                    scores.map((scoreRecord, i) => {
                        const numberChar = getNumberChar(i);
                        return (
                            <div key={i} className="score-line">
                                <div className="score-line-position-number">{numberChar}</div>
                                <div className="score-line-username">{scoreRecord.username}</div>
                                <div className="score-line-score">{scoreRecord.score}</div>
                            </div>
                        )
                    })}
            </article>
        </section>
    )
}

function getNumberChar(number) {
    number++;
    if (number > 3) return number + '. ';
    if (number > 0) {
        const utf8base = [0xD83E, 0xDD46];
        utf8base[1] += number;
        return String.fromCharCode(...utf8base)
    }
    return '?.';
}