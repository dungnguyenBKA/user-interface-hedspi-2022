import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Button } from "@mui/material";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./style.css"
import { workers } from './StatisticMockData';
import NavBar from '../../components/NavBar/NavBar';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import {
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Bar,
} from 'recharts';
import Footer from '../../components/Footer/footer';

const data = [
    {
        "name": "Nguyen Van A",
        "Đúng hạn": 4,
        "Trễ hạn": 1,
    },
    {
        "name": "Nguyen Van B",
        "Đúng hạn": 2,
        "Trễ hạn": 0,
    },
    {
        "name": "Nguyen Van C",
        "Đúng hạn": 2,
        "Trễ hạn": 1,
    },
    {
        "name": "Nguyen Van D",
        "Đúng hạn": 3,
        "Trễ hạn": 0,
    },
    {
        "name": "Nguyen Van E",
        "Đúng hạn": 5,
        "Trễ hạn": 0,
    }
]

const StatisticDetailTeam = () => {
    const { id } = useParams(); //must be the same as in route in App.tsx

    return (
        <>
            <NavBar />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "white",
                    boxShadow: "none",
                    overflow: "visible",
                    marginBottom: "7.5%"
                }}
            >

                <Typography
                    sx={{
                        fontSize: "40px",
                        textAlign: "center",
                        marginTop: "30px"
                    }}
                >
                    <b>TEAM A</b>
                </Typography>

                <Typography
                    variant='button'
                    textTransform="none"
                    fontSize="25px"
                    fontWeight="bold"
                    sx={{
                        marginBottom: "1.5%",
                        marginRight: "3%",
                        textAlign: "right",
                    }}
                >
                    Quản đốc phụ trách: Nguyễn Văn A
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        alignItem: "center",
                        justifyContent: "center",
                    }}
                >

                </Box>


                {/* Box has 2 element in a row 40-60 */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        marginTop: "2%"
                        // alignItems: "center",
                    }}
                >
                    {/* Box1: Circle Progress  */}
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            marginLeft: "3%",
                            marginRight: "1.5%",
                            flex: 4,
                            boxShadow: 7,
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "65%",
                                height: "65%",
                                marginBottom: "10px",
                            }}
                        >
                            <CircularProgressbar
                                value={75}
                                text={`${75}%`}
                                strokeWidth={8}
                            />
                        </Box>

                        <Typography
                            variant='button'
                            fontWeight="bold"
                            color="dodgerblue"
                            textTransform="none"
                            fontSize="22.5px"
                            sx={{
                                marginBottom: "5%",
                                textAlign: "center"
                            }}
                        >
                            Số công việc hoàn thành: {`${24} / ${32}`}
                        </Typography>
                    </Box>

                    {/* Box2: 2 Typography */}
                    <Box
                        sx={{
                            flex: 6,
                            display: "flex",
                            flexDirection: "column",
                            marginLeft: "3%",
                            marginRight: "2%",
                            boxShadow: 7
                        }}
                    >
                        <Typography
                            variant='button'
                            fontWeight="bold"
                            textTransform="none"
                            fontSize="22.5px"
                            sx={{
                                textAlign: "center"
                            }}
                        >
                            Biểu đồ thống kê công việc hoàn thành của các thành viên
                        </Typography>

                        <Typography
                            variant='button'
                            textTransform="none"
                            fontSize="16px"
                            sx={{
                                textAlign: "center",
                            }}
                        >
                            <i>(số liệu ngày 20/7/2022)</i>
                        </Typography>

                        <BarChart
                            width={750}
                            height={300}
                            data={data}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="Đúng hạn" fill="#00B31B" />
                            <Bar dataKey="Trễ hạn" fill="#E63E35" />
                        </BarChart>
                    </Box>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        marginLeft: "3%",
                        marginRight: "2%",
                        marginTop: "3%",
                        boxShadow: 7
                    }}
                >
                    <Typography
                        variant='button'
                        fontWeight="bold"
                        color="dodgerblue"
                        textTransform="none"
                        fontSize="25.5px"
                        sx={{
                            textAlign: "center"
                        }}
                    >
                        Danh sách thành viên
                    </Typography>

                    <TableContainer component={Paper}>
                        <Table sx={{ width: "100%" }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ fontSize: "18px", fontWeight: "bold" }}>Mã số (ID)</TableCell>
                                    <TableCell align="center" sx={{ fontSize: "18px", fontWeight: "bold" }}>Họ tên</TableCell>
                                    <TableCell align="center" sx={{ fontSize: "18px", fontWeight: "bold" }}>Đã hoàn thành</TableCell>
                                    <TableCell align="center" sx={{ fontSize: "18px", fontWeight: "bold" }}>Được giao</TableCell>
                                    <TableCell align="center" sx={{ fontSize: "18px", fontWeight: "bold" }}>Tỷ lệ</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {workers.map(worker => (
                                    <TableRow
                                        key={worker.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row" sx={{ fontSize: "16.5px" }}>
                                            {worker.id}
                                        </TableCell>
                                        <TableCell align="center" sx={{ fontSize: "16.5px" }}>{worker.name}</TableCell>
                                        <TableCell align="center" sx={{ fontSize: "16.5px", fontWeight: "bold" }}>{worker.completed}</TableCell>
                                        <TableCell align="center" sx={{ fontSize: "16.5px" }}>{worker.asigned}</TableCell>
                                        <TableCell align="center" sx={{ fontSize: "16.5px", fontWeight: "bold" }}>{Number(worker.completed / worker.asigned * 100).toFixed(2)}%</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>
        </>
    );
}

export default StatisticDetailTeam;