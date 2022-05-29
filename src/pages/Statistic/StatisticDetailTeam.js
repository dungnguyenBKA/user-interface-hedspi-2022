import React,{useState} from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Button } from "@mui/material";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./style.css"
import { workers } from './StatisticMockData';
const StatisticDetailTeam = () => {
    const { id } = useParams(); //must be the same as in route in App.tsx

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
                    fontSize: "40px",
                    textAlign: "center",
                    marginTop: "30px"
                }}
            >
               <b>Đội ABC SYSTEM</b>
            </Typography>


            <Box
                sx={{
                    display: "flex",
                    alignItem: "center",
                    justifyContent: "center",
                    marginTop: "17.5px",
                }}
            >
              
            </Box>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        marginLeft: "3%",
                        marginRight: "5%",
                        flex: 4,
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "45%",
                            height: "45%",
                            marginBottom: "10px",
                        }}
                    >
                        <CircularProgressbar
                            value={75}
                            text={`75%`}
                            strokeWidth={10}
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
                        marginTop: "7%",
                    }}
                >
                 

                    <Typography
                        variant='button'
                        fontWeight="bold"
                        color="text"
                        textTransform="none"
                        fontSize="25.5px"
                    >
                        Quản đốc phụ trách: Nguyễn Văn A
                    </Typography>
                    <div style={{height:'150px'}}></div>
                    <Typography
                        variant='button'
                        fontWeight="bold"
                        color="text"
                        textTransform="none"
                        fontSize="25.5px"
                    >
                        Danh sách thành viên
                    </Typography>
                </Box>
            </Box>
            <Box>
            <table style = {{width:'60%', textAlign:'center', fontSize:'1.5em', margin:'auto'}}>
            <tr>
                <th>id</th>
                <th>họ tên</th>
                <th>hoàn thành</th>
                <th>được giao</th>
                <th>tỷ lệ</th>
            </tr>
                {workers.map(worker =>
                <tr>
                    <td>{worker.id}</td>
                    <td>{worker.name}</td>
                    <td>{worker.completed}</td>
                    <td>{worker.asigned}</td>
                    <td>{Number(worker.completed/worker.asigned*100).toFixed(2)}%</td>
                </tr>)}
            </table>
            </Box>

        </Box>
    );
}

export default StatisticDetailTeam;