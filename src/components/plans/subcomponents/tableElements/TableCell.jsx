import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { innerBorders, cellHeight } from "../../PlansSection";

/**
 * Custom Cell for the table
 * @param {*} item - item of the cell (its content)
 * @param {*} index - index of the cell
 * @param {*} align - alignment of the content
 * @param {*} isKeyColumn - boolean if the cell is a key column ? (default = false)
 * @param {*} rightBorder - boolean if the cell has a right border
 */
const Cell = ({
    item,
    index,
    align,
    isKeyColumn = false,
    tips,
    rightBorder,
}) => {
    const theme = useTheme();

    const justifyContentMap = {
        left: "flex-start",
        center: "center",
        right: "flex-end",
    };

    return (
        <Box
            key={index}
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: justifyContentMap[align],
                flexGrow: 1,
                height: `${cellHeight}px`,
                p: "15px",
                backgroundColor: isKeyColumn
                    ? theme.palette.background.darkBeige
                    : index % 2 === 0
                      ? "#F8F9F9"
                      : "",
                borderRight: rightBorder ? innerBorders : "",
                borderTop: innerBorders,
            }}
        >
            <Typography
                variant="body2"
                textAlign={align}
                fontWeight={isKeyColumn ? 600 : "normal"}
            >
                {item} <br />
                {tips && (
                    <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ fontSize: "0.6rem" }}
                    >
                        {" "}
                        ({tips[index]})
                    </Typography>
                )}
            </Typography>
        </Box>
    );
};

export default Cell;
