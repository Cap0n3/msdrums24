import React from "react";
import { useTheme } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import BasicSection from "../common/basicSection/BasicSection";
import DesktopPlanTable from "./subcomponents/DesktopPlansTable";
import MobilePlanTable from "./subcomponents/MobilePlansTables";
import plansData from "../../data/plansTable.data.json";

const data = {
    keysColumn: [
        "Formule",
        "Durée du cours",
        "Tarif annuel",
        "Tarif trimestriel",
        "Tarif mensuel*",
        "Nombre de cours",
        "Période",
    ],
    firstColumn: [
        "Formule Individuelle",
        "30 min.",
        "1280.-",
        "320.-",
        "128.-",
        "De septembre à juin",
        "34"
    ],
    secondColumn: [
        "Formule Individuelle",
        "45 min.",
        "1880.-",
        "470.-",
        "188.-",
        "De septembre à juin",
        "34"
    ],
    thirdColumn: [
        "Formule Individuelle",
        "60 min.",
        "2480.-",
        "620.-",
        "248.-",
        "De septembre à juin",
        "34"
    ],
    fourthColumn: [
        "Formule Binôme",
        "45 min.",
        "1720.-",
        "425.-",
        "170.-",
        "De septembre à juin",
        "34"
    ],
};

export const cellHeight = 60;
export const innerBorders = "0.5px solid #D6DBDF";

const PlansSection = () => {
    const theme = useTheme();
    const isSm = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <BasicSection identifier="plans">
            <DesktopPlanTable data={plansData["fr"]} />
        </BasicSection>
    );
};

export default PlansSection;
