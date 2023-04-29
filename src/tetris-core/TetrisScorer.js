const clearLinesPoints = {
    1: 40,
    2: 100,
    3: 300,
    4: 1200
}

export default function TetrisScorer() {
    let clearedLines = 0;
    let score = 0;

    function getClearedLinesBonus(linesCount) {
        if (linesCount < 1) return 0;
        if (linesCount > 3) return clearLinesPoints[4];
        return clearLinesPoints[linesCount];
    }

    return {
        get clearedLines() {
            return clearedLines;
        },

        get score() {
            return score;
        },

        // Level increases every 10 burned lines
        get level() {
            return Math.floor(clearedLines / 10) + 1;
        },

        addClearedLines(linesCount) {
            score += getClearedLinesBonus(linesCount) * this.level;
            clearedLines += linesCount;
        },

        reset() {
            clearedLines = 0;
            score = 0;
        },
    }
}