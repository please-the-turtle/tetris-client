import CenterContainer from "../CenterContainer";
import { PulseLoader } from "react-spinners";

export default function Loading() {
    return (
        <CenterContainer>
            <PulseLoader color="white"/>
        </CenterContainer>
    );
}