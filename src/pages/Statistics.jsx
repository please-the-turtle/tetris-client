import { useEffect } from "react";
import CenterContainer from "../components/CenterContainer";
import StatisticsPanel from "../components/StatisticsPanel";

export default function Statistics() {
    return (
        <CenterContainer>
            <h1>Statistics</h1>
            <StatisticsPanel />
        </CenterContainer>
    )
}