import { useEffect, useState } from "react";
import { getStatistics } from "../services/statisticsService";
import CenterContainer from "../components/CenterContainer";
import CardsContainer from "../components/CardsContainer";
import StatisticsPanel from "../components/StatisticsPanel";
import UsernameForm from "../components/UsernameForm";

export default function Profile() {
    const [statisticSingleplayer, setStatisticsSingleplayer] = useState();
    const [statisticMultiplayer, setStatisticsMultiplayer] = useState();

    useEffect(() => {
        setStatisticsSingleplayer(getStatistics());
        setStatisticsMultiplayer(getStatistics(true));
    }, [])

    return (
        <CenterContainer>
            <UsernameForm/>
            <CardsContainer>
                <StatisticsPanel header='singleplayer' statistics={statisticSingleplayer} />
                <StatisticsPanel header='multiplayer' statistics={statisticMultiplayer} />
            </CardsContainer>
        </CenterContainer>
    )
}