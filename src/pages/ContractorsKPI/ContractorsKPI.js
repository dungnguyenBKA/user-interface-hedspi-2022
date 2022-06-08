import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { KPIMockData } from './KPIMockData';
import DefaultKPICard from '../../components/KPICard/DefaultKPICard';
import AddKPICard from '../../components/KPICard/AddKPICard';
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/footer";

const ContractorsKPI = () => {

    const [KPIData, setKPIData] = useState(KPIMockData);

    const onAddNewKPI = (newKPI) => {
        setKPIData([...KPIData, newKPI]);
    }

    const onDeleteKPI = (KPIid) => {
        setKPIData(KPIData.filter(e => e.id !== KPIid));
    }

    // const onSearchKPI = (inputName) => {

    // }

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
            <NavBar />
            <Typography
                sx={{
                    fontSize: "30px",
                    textAlign: "center",
                    marginTop: "30px"
                }}
            >
                DỰ ÁN LẮP ĐẶT HỆ THỐNG ĐIỆN CHO VINCOM HAI BÀ TRƯNG
            </Typography>

            <Box p={5}>
                <Grid container spacing={6}>
                    {KPIData.map((element) => (
                        <Grid
                            item xs={12} sm={6} md={4} lg={3} xl={2}
                            key={element.id}
                        >
                            <DefaultKPICard data={element} />
                        </Grid>
                    ))}
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                        <AddKPICard onAddNewKPI={onAddNewKPI} />
                    </Grid>
                </Grid>
            </Box>
            <Footer />
        </Box>
    );
}

export default ContractorsKPI;