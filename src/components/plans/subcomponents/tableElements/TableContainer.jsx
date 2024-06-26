import React from "react";
import { Box } from "@mui/material";
import { innerBorders } from "../../PlansSection";

const TableContainer = ({ children }) => {
    return (
        <Box
            className="plan-table-container"
            sx={{
                display: "flex",
                width: "100%",
                border: innerBorders,
                borderRadius: "10px",
                overflow: "hidden",
            }}
        >
            {children}
        </Box>
    );
};

export default TableContainer;
