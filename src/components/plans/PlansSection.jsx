import React from "react";
import { useTheme } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import BasicSection from "../common/basicSection/BasicSection";
import DesktopPlanTable from "./subcomponents/DesktopPlansTable";
import DesktopPlansTableALT from "./subcomponents/DesktopPlansTable_ALT";
import MobilePlanTable from "./subcomponents/MobilePlansTables";
import plansData from "../../data/plansTable.data.json";

const data = {
    keysColumn: [
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
    ],
    secondColumn: [
        "Formule Individuelle",
        "45 min.",
        "1880.-",
        "470.-",
        "188.-",
    ],
    thirdColumn: [
        "Formule Individuelle",
        "60 min.",
        "2480.-",
        "620.-",
        "248.-",
    ],
    fourthColumn: [
        "Formule Binôme",
        "45 min.",
        "1720.-",
        "425.-",
        "170.-",
    ],
};

export const cellHeight = 60;
export const innerBorders = "0.5px solid #D6DBDF";

const PlansSection = () => {
    const theme = useTheme();
    const isSm = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <BasicSection identifier="plans" direction="column">
            {
                isSm ?
                    <MobilePlanTable data={data} />
                    :
                    <DesktopPlanTable data={data} />
            }
            {/* <DesktopPlansTableALT data={plansData["fr"]} /> */}
        </BasicSection>
    );
};

export default PlansSection;
