import { useRef, useState, useEffect } from "react";
import Tetris from "tetris-core/Tetris";
import KeyboardTetrisController from "tetris-core/KeyboardTetrisController";
import CenterContainer from "components/CenterContainer";
import TetrisSessionContainer from "components/tetris/TetrisSessionContainer";
import GesturesTetrisController from "tetris-core/GesturesTetrisController";

export default function Game() {
    const refTetris = useRef();
    const [state, setState] = useState();

    useEffect(() => {
        const tetris = Tetris('seed');
        refTetris.current = tetris;
        refTetris.current.addStateListener(() => {
            setState(refTetris.current.state)
        });
        KeyboardTetrisController(refTetris.current);
        GesturesTetrisController(refTetris.current);
        tetris.start();
    }, [])

    return (
        <CenterContainer>
            <TetrisSessionContainer playerState={state} />
        </CenterContainer>
    )
}