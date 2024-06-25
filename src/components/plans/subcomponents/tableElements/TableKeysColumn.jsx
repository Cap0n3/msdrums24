import React from "react";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { Box } from "@mui/material";
import Header from "./TableHeader";
import StackCells from "./utils/StackCells";

/**
 * First column of the table with the keys of the table
 * @param {*} data - data of the table
 */
const TableKeysColumn = ({ data }) => {
    const theme = useTheme();
    const isXXS = useMediaQuery('(min-width:600px)');

    return (
        <Box sx={{ minWidth: "150px", maxWidth: "150px" }}>
            <Header title="" bgColor={theme.palette.background.lightBeige} />
            <StackCells data={data} align="left" isKeyColumn={true} />
        </Box>
    );
};

export default TableKeysColumn;