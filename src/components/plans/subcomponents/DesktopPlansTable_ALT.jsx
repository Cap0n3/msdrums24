import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";


const PlanTable = ({ planType, planDetails }) => (
    <TableContainer component={Paper} style={{ marginBottom: '16px' }}>
        <Typography variant="h6" style={{ margin: '16px' }}>{planType}</Typography>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Duration</TableCell>
                    {Object.keys(planDetails[Object.keys(planDetails)[0]]).map(key => (
                        <TableCell key={key}>{key.replace(/_/g, ' ')}</TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {Object.entries(planDetails).map(([duration, details]) => (
                    <TableRow key={duration}>
                        <TableCell>{duration}</TableCell>
                        {Object.values(details).map((value, idx) => (
                            <TableCell key={idx}>{value}</TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
);

const DesktopPlansTableALT = ({data}) => (
    <div>
        {Object.entries(data).map(([planType, planDetails]) => (
            <PlanTable key={planType} planType={planType} planDetails={planDetails} />
        ))}
    </div>
);

export default DesktopPlansTableALT;
