import TetrominoRandomizer from "tetris-core/TetrominoRandomizer";

describe('TetrominoRandomiser tests', () => {

    test('Get valid random tetramino', () => {
        const seed = 12345;
        const randomizer = TetrominoRandomizer(seed);
        const randomTetramino = randomizer.getRandomType();
        expect(randomTetramino).toHaveProperty('block');
        expect(randomTetramino).toHaveProperty('pattern');
    })

    test('Get equals tetraminoes from one seed', () => {
        const seed = 'itisstringseed';
        const firstRandomizer = TetrominoRandomizer(seed);
        const secondRandomizer = TetrominoRandomizer(seed);

        for (let i = 0; i < 10; i++) {
            let firstTetramino = firstRandomizer.getRandomType();
            let secondTetramino = secondRandomizer.getRandomType();

            expect(firstTetramino).toBe(secondTetramino);
        }
    })

    test('Tetraminoes packs from different seeds are not equals', () => {
        const firstRandomizer = TetrominoRandomizer('firstSeed');
        const secondRandomizer = TetrominoRandomizer('secondSeed');
        const firstTetraminoesPack = [];
        const secondTetraminoesPack = [];

        for (let i = 0; i < 10; i++) {
            const firstTetramino = firstRandomizer.getRandomType();
            firstTetraminoesPack[i] = firstTetramino;
            const secondTetramino = secondRandomizer.getRandomType();
            secondTetraminoesPack[i] = secondTetramino;
        }

        expect(firstTetraminoesPack).not.toEqual(secondTetraminoesPack);
    })

})