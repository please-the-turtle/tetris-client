import "./HighscoresTable.scss"

export default function HighscoresTable({ scores }) {
    return (
        <section className="highscores">
            <article className="highscores-header">
                🎯 Highscores:
            </article>
            <article className="highscores-table">
                {drawRecordsList(scores)}
            </article>
        </section>
    )
}

function drawRecordsList(scores) {
    if (!scores || scores.length < 1) {
        return (
            <div className="score-line message">There are no records</div>
        )
    }

    return scores?.map((scoreRecord, i) => {
        const numberChar = getNumberChar(i);
        return (
            <div key={i} className="score-line">
                <div className="score-line-position-number">{numberChar}</div>
                <div className="score-line-score">{scoreRecord}</div>
            </div>)
    })
}

function getNumberChar(number) {
    number++;
    if (number > 3) return number;
    if (number > 0) {
        const utf8base = [0xD83E, 0xDD46];
        utf8base[1] += number;
        return String.fromCharCode(...utf8base)
    }
    return '?.';
}