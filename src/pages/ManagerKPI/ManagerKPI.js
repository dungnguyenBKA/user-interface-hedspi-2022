import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { KPIMockData,ManagerList } from './KPIMockData';
import ManagerKPICard from '../../components/KPICard/ManagerKPICard';

const ManagerKPI = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "white",
                boxShadow: "none",
                overflow: "visible",
            }}
        >

            <Typography
                sx={{
                    fontSize: "30px",
                    textAlign: "center",
                    marginTop: "30px"
                }}
            >
                DỰ ÁN LẮP ĐẶT HỆ THỐNG ĐIỆN CHO VINCOM HAI BÀ TRƯNG
            </Typography>
            <Typography
                sx={{
                    fontSize: "30px",
                    textAlign: "center",
                    marginTop: "30px"
                }}
            >
                KPI được giao cho Quản đốc: {ManagerList[1].name}
            </Typography>
            <Box p={5}>
                <Grid container spacing={6}>
                    {KPIMockData.map((element) => (
                        <Grid
                            item xs={12} sm={6} md={4} lg={3} xl={2}
                            key={element.id}
                        >
                            <ManagerKPICard data={element} />
                        </Grid>
                    ))}
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default ManagerKPI;