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
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useTheme } from "@mui/material";

const muiDarkTheme = {
    white: "#FAFAFA",
    dark_bg: "#121212",
    dark_bg_el1: "#424242",
    purple: "#CE93D8",
    teal: "#80CBC4",
};

const sellPoints = [
    "Fast Progress",
    "Personalized Lesson Plans",
    "Flexible Scheduling",
    "One-on-One Attention",
    "Instant Feedback and Support",
    "Learn at Your Own Pace",
    "Tailored Song Selection",
    "Technique Improvement Focus",
    "All Skill Levels Welcome",
    "Engaging and Fun Learning Environment",
];

const ListItemComponent = ({ theme, text }) => (
    <ListItem>
        <ListItemIcon>
            <CheckCircleIcon sx={{ color: theme.palette.primary.main }} />
        </ListItemIcon>
        <ListItemText primary={text} sx={{ color: theme.palette.text.primary }} />
    </ListItem>
);

const PriceCard = ({ backgroundColor="#fff", highlight = false }) => {
    const theme = useTheme();
    return (
        <Card
            raised={highlight ? true : false}
            sx={{
                pb: 4,
                maxWidth: { xs: "100%", md: 400 },
                minHeight: 600,
                borderRadius: 4,
                backgroundColor: backgroundColor,
                border: `1px solid ${theme.palette.border.main}`,
                transform: {
                    xs: "none",
                    md: highlight ? "scale(1.1)" : "scale(1)",
                }, // Scale up if highlighted
            }}
        >
            <CardMedia
                component="img"
                height="190"
                image="https://doodleipsum.com/700/hand-drawn?i=3565f8ff86cd4081f5176bfcc8704793"
                alt="Some illustration"
            />
            <CardHeader
                title="Weekly"
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
                        CHF 360
                        <Typography
                            variant="caption"
                            component="span"
                            fontWeight={300}
                            color={theme.palette.text.secondary}
                        >
                            /month
                        </Typography>
                    </Typography>
                </Box>
                <List
                    component="nav"
                    aria-label="main mailbox folders"
                    dense={true}
                >
                    {sellPoints.map((point) => (
                        <ListItemComponent key={point} text={point} theme={theme} />
                    ))}
                </List>
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                    variant="outlined"
                    size="large"
                    sx={{
                        mt: 4,
                        color: muiDarkTheme.purple,
                        borderColor: muiDarkTheme.purple,
                        "&:hover": {
                            color: muiDarkTheme.teal,
                            borderColor: muiDarkTheme.teal,
                        },
                    }}
                >
                    Join
                </Button>
            </CardActions>
        </Card>
    );
};

export default PriceCard;
