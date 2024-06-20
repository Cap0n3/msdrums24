import React from "react";
import {
    Box,
    Typography,
} from "@mui/material";
import TableContainer from "./tableElements/TableContainer";
import Header from "./tableElements/TableHeader";
import Cell from "./tableElements/TableCell";
import TableKeysColumn from "./tableElements/TableKeysColumn";
import StackCells from "./tableElements/utils/StackCells";
import Footer from "./tableElements/TableFooter";
import { useTheme } from "@mui/material/styles";
import { innerBorders } from "../PlansSection";


const DesktopPlanTable = ({ data }) => {
    const theme = useTheme();

    React.useEffect(() => {
        const plans = Object.keys(data)
        console.log(plans)
    }, [data]);

    return (
        <TableContainer>
            {/* <TableKeysColumn data={data.keysColumn} />
            <Box sx={{ width: "100%", borderLeft: innerBorders }}>
                <Header title={data.firstColumn[0]} bgColor={theme.palette.background.lightBeige} />
                <Box sx={{ display: "flex" }}>
                    <StackCells data={data.firstColumn.slice(1)} rightBorder={true} />
                    <StackCells data={data.secondColumn.slice(1)} rightBorder={true} />
                    <StackCells data={data.thirdColumn.slice(1)} />
                </Box>
                <Cell item="34" index={0} align="center"  />
                <Footer content="De septembre à juin" />
            </Box>
            <Box sx={{ width: "100%", borderLeft: innerBorders }}>
                <Header title={data.fourthColumn[0]} bgColor={theme.palette.background.lightBeige} />
                <StackCells data={data.fourthColumn.slice(1)} />
                <Cell item="34" index={0} align="center"  />
                <Footer content="De septembre à juin" />
            </Box>
            <Box sx={{ width: "100%", borderLeft: innerBorders }}>
                <Header title={data.firstColumn[0]} bgColor={theme.palette.background.lightBeige} />
                <Box sx={{ display: "flex" }}>
                    <StackCells data={data.firstColumn.slice(1)} rightBorder={true} />
                    <StackCells data={data.secondColumn.slice(1)} rightBorder={true} />
                    <StackCells data={data.thirdColumn.slice(1)} />
                </Box>
                <Cell item="34" index={0} align="center"  />
                <Footer content="De septembre à juin" />
            </Box> */}
        </TableContainer>
    );
};

export default DesktopPlanTable;
