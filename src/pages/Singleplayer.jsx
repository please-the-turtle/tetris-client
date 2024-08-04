import { useState, useEffect } from "react";
import { updateStatistics } from "../services/statisticsService"
import Tetris from "../tetris-core/Tetris";
import KeyboardTetrisController from "../tetris-core/KeyboardTetrisController";
import CenterContainer from "../components/CenterContainer";
import TetrisSessionContainer from "../components/tetris/TetrisSessionContainer";
import GesturesTetrisController from "../tetris-core/GesturesTetrisController";
import EventsTetrisController from "../tetris-core/EventsTetrisController";

export default function Singleplayer() {
    const [state, setState] = useState();

    useEffect(() => {
        let tetris = Tetris(Date.now());
        let kbController = KeyboardTetrisController(tetris);
        let gesturesController = GesturesTetrisController(tetris);
        let eventsController = EventsTetrisController(tetris);

        tetris.addListener('statechanged', () => {
            setState(tetris.state)
        });

        tetris.addListener('gameover', () => {
            updateStatistics(tetris.state.score)
        })

        return () => {
            kbController.dispose();
            kbController = null;
            gesturesController.dispose();
            gesturesController = null;
            eventsController.dispose();
            eventsController = null;

            tetris.dispose();
            tetris = null;
        }
    }, [])

    return (
        <CenterContainer>
            <TetrisSessionContainer playerState={state} />
        </CenterContainer>
    )
}