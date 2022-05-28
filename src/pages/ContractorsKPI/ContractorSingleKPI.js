import React from 'react';
import { Box, Typography } from "@mui/material";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ContractorSingleKPI = ({ singleKPI }) => {

    const precise = (x) => {
        return x.toPrecision(4);
    }

    const value = precise(singleKPI.completed / singleKPI.allTask * 100);

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
                KPI: {singleKPI.name}
            </Typography>

            {/* Box has 2 element in a row 40-60 */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                {/* Box1: Circle Progress  */}
                <Box
                    sx={{
                        width: "75%",
                        height: "75%",
                        flex: 4
                    }}
                >
                    <CircularProgressbar
                        value={value}
                        text={`${value}%`}
                        strokeWidth={5}
                    />
                </Box>

                {/* Box2: 2 Typography */}
                <Box sx={{ flex: 6 }}>
                    <Typography
                        variant='button'
                        fontWeight="bold"
                        color="red"
                        textTransform="none"
                        fontSize="17.5px"
                    >
                        Hạn chót: {singleKPI.deadline}
                    </Typography>

                    <Typography
                        variant='button'
                        fontWeight="bold"
                        color="text"
                        textTransform="none"
                        fontSize="20px"
                    >
                        Quản đốc phụ trách: {singleKPI.manager}
                    </Typography>
                </Box>

                <Box>
                    <Typography
                        sx={{
                            fontSize: "30px",
                            textAlign: "center",
                            marginTop: "20px"
                        }}
                    >
                        Danh sách công việc
                    </Typography>

                    {/* Table */}
                    
                    <Button variant="contained" color="error">
                        Xóa KPI
                    </Button>
                </Box>
            </Box>


            {/* <NewKPIForm open={open}/> */}
        </Box>
    );
}

export default ContractorSingleKPI;