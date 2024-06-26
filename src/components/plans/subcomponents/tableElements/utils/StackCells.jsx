import React from "react";
import { Box } from "@mui/material";
import Cell from "../TableCell";

/**
 * Utils to stack cells on top of each other.
 * @param {*} data - An array of objects that contain the content of each cell.
 * @param {*} align - The alignment of the cells in the column.
 * @param {*} rightBorder - Whether to add a border to the right of the cells in the column.
 * @param {*} isKeyColumn - Whether the column is a key column (the first column with titles).
 */
const StackCells = ({
    data,
    align = "center",
    rightBorder = false,
    isKeyColumn = false,
    tips,
}) => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
            {data.map((item, index) => (
                <Cell
                    key={index}
                    item={item}
                    index={index}
                    align={align}
                    isKeyColumn={isKeyColumn}
                    tips={tips}
                    rightBorder={rightBorder}
                />
            ))}
        </Box>
    );
};

export default StackCells;
