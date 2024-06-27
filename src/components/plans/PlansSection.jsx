import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import BasicSection from "../common/basicSection/BasicSection";
import RiseTitle from "../common/riseTitle/RiseTitle";
import DesktopPlanTable from "./subcomponents/DesktopPlansTable";
import MobilePlanTable from "./subcomponents/MobilePlansTables";
import AdditionalInfoComponent from "./subcomponents/AddInfoComponent";

export const cellHeight = 80;
export const innerBorders = "0.5px solid #D6DBDF";

const PlansSection = ({ titles, data, additionalInfos }) => {
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
        setDataSubkeys(Object.keys(individualPlan30min));

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

    return (
        <BasicSection identifier="plans" direction="column">
            <RiseTitle title={titles.title} subTitle={titles.subTitle} />
            {planNames.length > 0 &&
                dataSubkeys.length > 0 &&
                columns.length > 0 &&
                (isSm ? (
                    <MobilePlanTable
                        plans={planNames}
                        subKeys={dataSubkeys}
                        dataColumns={columns}
                    />
                ) : (
                    <DesktopPlanTable
                        plans={planNames}
                        subKeys={dataSubkeys}
                        dataColumns={columns}
                    />
                ))}
            <AdditionalInfoComponent additionalInfos={additionalInfos} />
        </BasicSection>
    );
};

export default PlansSection;
