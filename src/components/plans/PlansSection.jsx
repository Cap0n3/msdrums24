import React, { useState, useEffect } from "react";
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

const PlansSection = ({data}) => {
    const theme = useTheme();
    const isSm = useMediaQuery(theme.breakpoints.down("md"));
    const [planNames, setPlanNames] = useState([]);
    const [dataSubkeys, setDataSubkeys] = useState([]);
    const [columns, setColumns] = useState([]);

    useEffect(() => {
        // Get plans
        const planLabels = Object.keys(data);
        setPlanNames(planLabels);
        // Get standard lesson durations
        const lessonDurations = Object.keys(data[planLabels[0]]);
        // Get all plans data
        const individualPlan30min = data[planLabels[0]][lessonDurations[0]];
        const individualPlan45min = data[planLabels[0]][lessonDurations[1]];
        const individualPlan60min = data[planLabels[0]][lessonDurations[2]];
        const dualPlan45min = data[planLabels[1]][lessonDurations[1]];
        const aLaCarte30min = data[planLabels[2]][lessonDurations[0]];
        const aLaCarte45min = data[planLabels[2]][lessonDurations[1]];
        const aLaCarte60min = data[planLabels[2]][lessonDurations[2]];
        // Get subkeys of plans data (for first column of table)
        setDataSubkeys(Object.keys(individualPlan30min))

        // Function to create columns based on the plan data
        const createColumn = (planData) => Object.values(planData);
        
        setColumns([
            createColumn(individualPlan30min),
            createColumn(individualPlan45min),
            createColumn(individualPlan60min),
            createColumn(dualPlan45min),
            createColumn(aLaCarte30min),
            createColumn(aLaCarte45min),
            createColumn(aLaCarte60min),
        ]);
    }, [data]);

    // useEffect(() => {
    //     console.log(dataSubkeys);
    //     console.log(columns);
    //     console.log(planNames);
    // }, [planNames, dataSubkeys, columns]);

    // useEffect(() => {
    //     console.log(data);
    // }, [data]);

    return (
        <BasicSection identifier="plans" direction="column">
            {planNames.length > 0 && dataSubkeys.length > 0 && columns.length > 0 && (
                <DesktopPlanTable plans={planNames} subKeys={dataSubkeys} dataColumns={columns} />
            )}
            {/* {
                isSm ?
                    <MobilePlanTable data={data} />
                    :
                    <DesktopPlanTable data={data} />
            } */}
            {/* <DesktopPlansTableALT data={plansData["fr"]} /> */}
        </BasicSection>
    );
};

export default PlansSection;
