import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { teams } from './StatisticMockData';
import TeamCard from '../../components/Statistic/TeamCard';
import AddTeamCard from '../../components/Statistic/AddTeamCard';
import { CircularProgressbar } from "react-circular-progressbar";




const Statistic = () => {
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
            <div style={{margin:'auto',width:'30%', display: 'flex' ,flexDirection: 'column', alignItems: 'center'}}>
                <Box position="relative" width="80%" height="80%"
                    shadow="xl"
                    borderRadius="xl"
                    mt="10px"
                    sx={{ flex: 5 }}
                >
                    <CircularProgressbar
                        value={30}
                        text={`30%`}
                        strokeWidth={5}
                    />
                </Box>
                <Typography
                    variant='button'
                    fontWeight="bold"
                    color="dodgerblue"
                    fontSize="30px"
                    textTransform="none"
                >
                    Đã xong: 42/148
                </Typography>
            </div>
            

            <Typography
                sx={{
                    fontSize: "30px",
                    textAlign: "center",
                    marginTop: "30px"
                }}
            >
            Danh sach va tien do cac team
            </Typography>
            <Box p={5}>
                <Grid container spacing={6}>
                    {teams.map((element) => (
                        <Grid
                            item xs={12} sm={6} md={4} lg={3} xl={2}
                            key={element.id}
                        >
                            <TeamCard data={element} />
                        </Grid>
                    ))}
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                        <AddTeamCard/>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default Statistic;