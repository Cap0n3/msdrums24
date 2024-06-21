import React, { useContext } from "react";
import { LangContext } from "../context/LangContext";
import PlansSection from "../components/plans/PlansSection";
//import plansTableData from "../data/plansTable.data.json";
import { pricingTable, infos } from "../data/plans.data";

const Plans = () => {
    const { language } = useContext(LangContext);

    return <PlansSection data={pricingTable[language]} additionalInfos={infos[language]} />;
};

export default Plans;
