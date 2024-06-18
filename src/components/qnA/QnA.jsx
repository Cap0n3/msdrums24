import React from "react";
import { useTheme } from "@mui/material";
import RespImage from "../common/respImage/RespImage";
import { darken } from "polished";
import GridSection from "../common/gridSection/GridSection";
import QnaPanel from "./subcomponents/QnaPanel";

const QnA = ({ identifier, title, subtitle, questions, contrast = false }) => {
    const theme = useTheme();

    return (
        <>
            <GridSection
                identifier={identifier}
                contents={[
                    {
                        children: (
                            <RespImage
                                image="https://picsum.photos/id/4/800/800"
                                percentageWidth={90}
                                title="QnA"
                                alt="QnA"
                            />
                        ),
                        sx: {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        },
                    },
                    {
                        children: (
                            <QnaPanel
                                title={title}
                                subtitle={subtitle}
                                questions={questions}
                            />
                        ),
                        sx: {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "flex-start",
                        },
                    },
                ]}
                smScreen_cellSpacing={8} // Space between columns for small screens
                contrast={contrast}
                reverse={false}
            />
        </>
    );
};

export default QnA;
