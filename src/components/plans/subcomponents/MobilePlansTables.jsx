import React from "react";
import {
    Box,
    Typography,
} from "@mui/material";
import { useMediaQuery } from "@mui/material";
import TableContainer from "./tableElements/TableContainer";
import Header from "./tableElements/TableHeader";
import Cell from "./tableElements/TableCell";
import Footer from "./tableElements/TableFooter";
import TableKeysColumn from "./tableElements/TableKeysColumn";
import StackCells from "./tableElements/utils/StackCells";
import { useTheme } from "@mui/material/styles";
import { innerBorders } from "../PlansSection";


const MobilePlanTable = ({ data }) => {
    const theme = useTheme();
    const isXS = useMediaQuery('(min-width:600px)');

    React.useEffect(() => {
        console.log(isXS)
    }, [isXS]);

    return (
        <Box sx={{ width: "100%", display: "flex", flexDirection: "column", gap: "50px" }}>
            <TableContainer>
                { isXS ? <TableKeysColumn data={data.keysColumn} /> : "" }
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
            </TableContainer>
            <TableContainer>
                <TableKeysColumn data={data.keysColumn} />
                <Box sx={{ width: "100%", borderLeft: innerBorders }}>
                    <Header title={data.fourthColumn[0]} bgColor={theme.palette.background.lightBeige} />
                    <StackCells data={data.fourthColumn.slice(1)} />
                    <Cell item="34" index={0} align="center"  />
                    <Footer content="De septembre à juin" />
                </Box>
            </TableContainer>
            <TableContainer>
                <TableKeysColumn data={data.keysColumn} />
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
            </TableContainer>
        </Box>
    );
};

export default MobilePlanTable;