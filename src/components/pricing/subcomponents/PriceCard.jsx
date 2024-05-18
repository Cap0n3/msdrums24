import React from "react";
import {
    Box,
    Button,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Typography,
    Card,
    CardHeader,
    CardContent,
    CardMedia,
    CardActions,
    Fade,
    Slide,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useTheme } from "@mui/material";

const ListItemComponent = ({ theme, text }) => (
    <ListItem>
        <ListItemIcon>
            <CheckCircleIcon sx={{ color: theme.palette.primary.main }} />
        </ListItemIcon>
        <ListItemText
            primary={text}
            sx={{ color: theme.palette.text.primary }}
        />
    </ListItem>
);

const PriceCard = ({
    image,
    title,
    price,
    paymentFrequency,
    sellingPoints,
    action,
    backgroundColor = "#fff",
    highlight = false,
    inView,
    transitionTime,
}) => {
    const theme = useTheme();

    return (
        <Slide direction="up" in={inView} timeout={transitionTime}>
            <Box>
                <Card
                    raised={highlight ? true : false}
                    sx={{
                        pb: 4,
                        width: { xs: "100%", sm: 350, xl: 420 },
                        minWidth: 300,
                        minHeight: 650,
                        borderRadius: 4,
                        backgroundColor: backgroundColor,
                        border: `1px solid ${theme.palette.border.main}`,
                        transform: {
                            md: "none",
                            lg: highlight ? "scale(1.1)" : "scale(1)",
                        }, // Scale up if highlighted
                    }}
                >
                    <CardMedia
                        component="img"
                        height="190"
                        image={image}
                        alt="Some illustration"
                    />
                    <CardHeader
                        title={title}
                        titleTypographyProps={{
                            color: theme.palette.text.secondary,
                            align: "center",
                        }}
                    />
                    <CardContent>
                        <Box
                            component={"div"}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "flex-end",
                                mb: 4,
                            }}
                        >
                            <Typography
                                variant="h5"
                                component="span"
                                color={theme.palette.text.primary}
                                fontWeight={500}
                            >
                                CHF {price}
                                <Typography
                                    variant="caption"
                                    component="span"
                                    fontWeight={300}
                                    color={theme.palette.text.secondary}
                                >
                                    {paymentFrequency}
                                </Typography>
                            </Typography>
                        </Box>
                        <List
                            component="nav"
                            aria-label="main mailbox folders"
                            dense={true}
                        >
                            {sellingPoints.map((point) => (
                                <ListItemComponent
                                    key={point}
                                    text={point}
                                    theme={theme}
                                />
                            ))}
                        </List>
                    </CardContent>
                    <CardActions
                        sx={{ display: "flex", justifyContent: "center" }}
                    >
                        <Button
                            variant="outlined"
                            size="large"
                            sx={{
                                mt: 4,
                                color: theme.palette.primary.main,
                                borderColor: theme.palette.button.main,
                                "&:hover": {
                                    color: theme.palette.button.hover,
                                    borderColor: theme.palette.button.hover,
                                },
                            }}
                        >
                            {action}
                        </Button>
                    </CardActions>
                </Card>
            </Box>
        </Slide>
    );
};

export default PriceCard;
