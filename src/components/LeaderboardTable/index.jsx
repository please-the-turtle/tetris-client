import "./LeaderboardTable.scss"

export default function LeaderboardTable() {

    return (
        <section className="leaderboard">
            <article className="leaderboard-header">
                <h1>🎯 Leaderboard</h1>
            </article>
            <article className="leaderboard-table">
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