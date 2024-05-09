import React, { useState } from "react";
import { useTheme, styled } from "@mui/material";
import Image from "../common/imgComponent/Image";
import { darken } from "polished";
import GridSection from "../common/section/GridSection";
import QnaPanel from "./subcomponents/QnaPanel";

const QnA = ({ questions, contrast = false }) => {
    const theme = useTheme();

    return (
        <>
            <GridSection
                contents={[
                    {
                        children: (
                            <Image
                                image="https://picsum.photos/id/4/800/800"
                                width={300}
                            />
                        ),
                        sx: {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        },
                    },
                    {
                        children: <QnaPanel questions={questions} />,
                        sx: {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "flex-start",
                        },
                    },
                ]}
                smScreen_cellSpacing={8} // Space between columns for small screens
                backgroundColor={
                    contrast
                        ? darken(0.1, theme.palette.background.default)
                        : theme.palette.background.default
                }
                reverse={true}
            />
        </>
    );
};

export default QnA;
