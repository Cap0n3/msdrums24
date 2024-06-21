import React, { useContext } from "react";
import { LangContext } from "../context/LangContext";
import PlansSection from "../components/plans/PlansSection";
import plansTableData from "../data/plansTable.data.json";

const Plans = () => {
    const { language } = useContext(LangContext);

    return <PlansSection data={plansTableData[language]}/>;
};

export default Plans;
