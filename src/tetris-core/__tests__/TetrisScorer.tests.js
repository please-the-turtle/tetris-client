import TetrisScorer from "tetris-core/TetrisScorer";

describe('TetrisScorer tests', () => {

    let scorer;
    beforeEach(() => {
        scorer = TetrisScorer();
    })

    test('Create defined TetrisScorer', () => {
        expect(scorer).toBeDefined();
    })

    test('Create new TetrisScorer with valid initial state', () => {
        const expectedClearedLines = 0; 
        const expectedScore = 0;
        const expectedLevel = 1;

        expect(scorer.score).toBe(expectedScore);
        expect(scorer.clearedLines).toBe(expectedClearedLines);
        expect(scorer.level).toBe(expectedLevel);
    })

    test('Add one cleared line', () => {
        const expectedClearedLines = 1; 
        const expectedScore = 40;
        const expectedLevel = 1;
        
        scorer.addClearedLines(1)

        expect(scorer.score).toBe(expectedScore);
        expect(scorer.clearedLines).toBe(expectedClearedLines);
        expect(scorer.level).toBe(expectedLevel);
    })

    test('Add zero cleared lines', () => {
        const expectedClearedLines = 0; 
        const expectedScore = 0;
        const expectedLevel = 1;
        
        scorer.addClearedLines(0)

        expect(scorer.score).toBe(expectedScore);
        expect(scorer.clearedLines).toBe(expectedClearedLines);
        expect(scorer.level).toBe(expectedLevel);
    })

    test('Add two cleared lines', () => {
        const expectedClearedLines = 2; 
        const expectedScore = 100;
        const expectedLevel = 1;
        
        scorer.addClearedLines(2)

        expect(scorer.score).toBe(expectedScore);
        expect(scorer.clearedLines).toBe(expectedClearedLines);
        expect(scorer.level).toBe(expectedLevel);
    })

    test('Add three cleared lines', () => {
        const expectedClearedLines = 3; 
        const expectedScore = 300;
        const expectedLevel = 1;
        
        scorer.addClearedLines(3)

        expect(scorer.score).toBe(expectedScore);
        expect(scorer.clearedLines).toBe(expectedClearedLines);
        expect(scorer.level).toBe(expectedLevel);
    })

    test('Add four cleared lines', () => {
        const expectedClearedLines = 4; 
        const expectedScore = 1200;
        const expectedLevel = 1;
        
        scorer.addClearedLines(4)

        expect(scorer.score).toBe(expectedScore);
        expect(scorer.clearedLines).toBe(expectedClearedLines);
        expect(scorer.level).toBe(expectedLevel);
    })

    test('Add 5 cleared lines', () => {
        const expectedClearedLines = 5; 
        const expectedScore = 1200;
        const expectedLevel = 1;
        
        scorer.addClearedLines(5)

        expect(scorer.score).toBe(expectedScore);
        expect(scorer.clearedLines).toBe(expectedClearedLines);
        expect(scorer.level).toBe(expectedLevel);
    })

    test('Add 10 cleared lines', () => {
        const expectedClearedLines = 10; 
        const expectedScore = 1200;
        const expectedLevel = 2;
        
        scorer.addClearedLines(10)

        expect(scorer.score).toBe(expectedScore);
        expect(scorer.clearedLines).toBe(expectedClearedLines);
        expect(scorer.level).toBe(expectedLevel);
    })

    test('Level up', () => {
        const expectedLevel = 2;

        scorer.addClearedLines(4);
        scorer.addClearedLines(4);
        scorer.addClearedLines(3);

        expect(scorer.level).toBe(expectedLevel);
    })

    test('Reset TetrisScorer', () => {
        const expectedClearedLines = 0; 
        const expectedScore = 0;
        const expectedLevel = 1;

        scorer.addClearedLines(2);
        scorer.addClearedLines(8);
        scorer.reset();

        expect(scorer.score).toBe(expectedScore);
        expect(scorer.clearedLines).toBe(expectedClearedLines);
        expect(scorer.level).toBe(expectedLevel);
    })
})