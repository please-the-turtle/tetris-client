import { useRef, useState, useEffect } from "react";
import { updateStatistics } from "../services/statisticsService"
import Tetris from "../tetris-core/Tetris";
import KeyboardTetrisController from "../tetris-core/KeyboardTetrisController";
import CenterContainer from "../components/CenterContainer";
import TetrisSessionContainer from "../components/tetris/TetrisSessionContainer";
import GesturesTetrisController from "../tetris-core/GesturesTetrisController";
import EventsTetrisController from "../tetris-core/EventsTetrisController";

export default function Singleplayer() {
    const refTetris = useRef();
    const [state, setState] = useState();

    useEffect(() => {
        refTetris.current = Tetris(Date.now());
        
        refTetris.current.addListener('statechanged', () => {
            setState(refTetris.current.state)
        });

        refTetris.current.addListener('gameover', () => {
            updateStatistics(refTetris.current.state.score)
        })

        KeyboardTetrisController(refTetris.current);
        GesturesTetrisController(refTetris.current);
        EventsTetrisController(refTetris.current);
    }, [])

    return (
        <CenterContainer>
            <TetrisSessionContainer playerState={state} />
        </CenterContainer>
    )
}