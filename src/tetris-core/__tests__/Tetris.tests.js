import Tetris from '../Tetris'

describe('Tetris tests', () => {

    let tetris = {}
    beforeEach(() => {
        tetris = Tetris('seed');
    })

    test('Create Tetris object', () => {
        expect(tetris).toBeDefined();
    })

    test('addStateListener valid', () => {
        let actualUpadatedState = 0;
        const expectedUpdatedState = 10;

        tetris.addStateListener(() => {
            actualUpadatedState = expectedUpdatedState;
        });
        tetris.reset();  // reset invokes listeners

        expect(actualUpadatedState).toEqual(expectedUpdatedState);
    })

    test.skip('New state passed to state listener is valid', () => {
        let actualState = undefined;
        const listener = newState => {
            actualState = newState;
        }

        tetris.addStateListener(listener);
        tetris.reset();

        expect(actualState).toBeDefined();
        // expect(actualState.)
    })

    test('removeStateListener valid', () => {
        let listenerCallsCount = 0;
        const listener = () => {
            listenerCallsCount++;
        }
        expect(listenerCallsCount).toEqual(0);
        tetris.addStateListener(listener);
        expect(listenerCallsCount).toEqual(0);
        tetris.reset(); // reset invokes listeners
        expect(listenerCallsCount).toEqual(1);
    })

    test('Remove state listener that not exists', () =>{
        const listener = () => {};

        tetris.removeStateListener(listener);
    })
})