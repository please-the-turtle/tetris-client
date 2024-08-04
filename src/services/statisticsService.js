const scoresCapacity = 10;

export function updateStatistics(newScore, isMultiplayer = false) {
    const key = isMultiplayer ? 'multiplayer' : 'singleplayer';

    const statistics = getStatistics(isMultiplayer)
    statistics.gamesCount += 1;
    statistics.scoresSum += newScore;
    statistics.avgScore = statistics.scoresSum / statistics.gamesCount;
    statistics.avgScore = +statistics.avgScore.toFixed(2);
    addNewScore(statistics.scores, newScore);

    const value = JSON.stringify(statistics);
    localStorage.setItem(key, value)
}

export function getStatistics(isMultiplayer = false) {
    const key = isMultiplayer ? 'multiplayer' : 'singleplayer';
    let statistics;
    try {
        statistics = JSON.parse(localStorage.getItem(key));
    }
    catch {
        statistics = null;
    }
    if (!statistics) {
        statistics = {
            gamesCount: 0,
            scoresSum: 0,
            avgScore: 0,
            scores: [],
        }
    }
    
    return statistics
}

function addNewScore(scores, newScore) {
    if (newScore <= 0) {
        return;
    }

    if (!Array.isArray(scores)) {
        console.error('Scores must be array');
        return;
    }

    if (scores.includes(newScore)) {
        return;
    }

    scores.push(newScore);
    scores.sort(function (a, b) { return b - a });
    if (scores.length > scoresCapacity) {
        scores.slice(0, scoresCapacity);
    }
}