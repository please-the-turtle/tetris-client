import { useEffect, useState } from "react";
import { getStatistics } from "../services/statisticsService";
import CenterContainer from "../components/CenterContainer";
import CardsContainer from "../components/CardsContainer";
import StatisticsPanel from "../components/StatisticsPanel";

export default function Statistics() {
    const [statisticSingleplayer, setStatisticsSingleplayer] = useState();
    const [statisticMultiplayer, setStatisticsMultiplayer] = useState();

    useEffect(() => {
        setStatisticsSingleplayer(getStatistics());
        setStatisticsMultiplayer(getStatistics(true));
    }, [])

    return (
        <CenterContainer>
            <CardsContainer>
                <StatisticsPanel header='singleplayer' statistics={statisticSingleplayer} />
                <StatisticsPanel header='multiplayer' statistics={statisticMultiplayer} />
            </CardsContainer>
        </CenterContainer>
    )
}