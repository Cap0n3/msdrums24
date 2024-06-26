import React from "react";
import { Box, Typography } from "@mui/material";
import TableContainer from "./tableElements/TableContainer";
import Header from "./tableElements/TableHeader";
import Cell from "./tableElements/TableCell";
import TableKeysColumn from "./tableElements/TableKeysColumn";
import StackCells from "./tableElements/utils/StackCells";
import { useTheme } from "@mui/material/styles";
import { innerBorders } from "../PlansSection";

const DesktopPlanTable = ({ plans, subKeys, dataColumns }) => {
    const theme = useTheme();

    return (
        <TableContainer>
            <TableKeysColumn data={subKeys} />
            <Box sx={{ width: "100%", borderLeft: innerBorders }}>
                <Header
                    title={plans[0]}
                    bgColor={theme.palette.background.lightBeige}
                />
                <Box sx={{ display: "flex" }}>
                    <StackCells
                        data={dataColumns[0].slice(0, -2)}
                        rightBorder={true}
                    />
                    <StackCells
                        data={dataColumns[1].slice(0, -2)}
                        rightBorder={true}
                    />
                    <StackCells
                        data={dataColumns[2].slice(0, -2)}
                        rightBorder={true}
                    />
                </Box>
                {/* Full length cells (spanning 3 columns) */}
                <Cell item={dataColumns[0][4]} index={4} align="center" />
                <Cell item={dataColumns[0][5]} index={5} align="center" />
            </Box>
            <Box sx={{ width: "100%", borderLeft: innerBorders }}>
                <Header
                    title={plans[1]}
                    bgColor={theme.palette.background.lightBeige}
                />
                <StackCells data={dataColumns[3]} />
            </Box>
            <Box sx={{ width: "100%", borderLeft: innerBorders }}>
                <Header
                    title={plans[2]}
                    bgColor={theme.palette.background.lightBeige}
                />
                <Box sx={{ display: "flex" }}>
                    <StackCells
                        data={dataColumns[4].slice(0, -1)}
                        rightBorder={true}
                    />
                    <StackCells
                        data={dataColumns[5].slice(0, -1)}
                        rightBorder={true}
                    />
                    <StackCells data={dataColumns[6].slice(0, -1)} />
                </Box>
                {/* Full length cells (spanning 3 columns) */}
                <Cell item={dataColumns[4][5]} index={5} align="center" />
            </Box>
        </TableContainer>
    );
};

export default DesktopPlanTable;
