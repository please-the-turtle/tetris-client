/**
 * Used to control an instance of a Tetris game when calling a java script event. 
 * Such events are intercepted by EventsTetrisController.
 * @param {TetrisGameEventAction} action 
 *  The name of the triggered action with the game tetris session.
 * @param {number} controllerId Identifier to identify the specific controller 
 *  for which this event is intended.
 * @returns New TetrisGameEvent instance.
 */
export default function TetrisGameEvent(action, controllerId = 0) {
    return new CustomEvent(
        'tetris', {
        detail: {
            tetrisAction: action,
            controllerId: controllerId
        },
        bubbles: true
    })
}