import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"

const DefaultKPICard = ({ data }) => {

    const precise = (x) => {
        return x.toPrecision(4);
    }

    let value = 0;
    if (data.allTask !== 0) {
        value = precise(data.completed / data.allTask * 100);
    }

    const navigate = useNavigate();

    const navigateToKPI = () => {
        navigate(`/contractor-KPI/${data.id}`);
    }

    return (
        <Card
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white",
                boxShadow: 5,
                border: 1,
                overflow: "visible",
                height: 1,
                borderRadius: "5%"
            }}
        >

            <Box mt={1} mx={0.5} sx={{ textAlign: "center", flex: 2.5 }}>
                <Typography
                    variant='button'
                    fontWeight="bold"
                    color="text"
                    textTransform="none"
                    fontSize="20px"
                >
                    {data.name}
                </Typography>
            </Box>

            <Box
                mt={1}
                mx={0.5}
                sx={{
                    textAlign: "center",
                    flex: 1
                }}
            >
                <Typography variant='button' fontWeight="regular" color="red" textTransform="none" fontSize="17.5px">
                    Hạn bàn giao: {data.deadline}
                </Typography>
            </Box>


            <Box
                position="relative"
                width="70%"
                height="70%"
                shadow="xl"
                borderRadius="xl"
                mt="10px"
                sx={{ flex: 5 }}
            >
                <CircularProgressbar
                    value={value}
                    text={`${value}%`}
                    strokeWidth={5}
                />
            </Box>

            <Box
                mt={1}
                mx={0.5}
                mb={1}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >

                <Typography
                    variant='button'
                    fontWeight="bold"
                    color="dodgerblue"
                    fontSize="24px"
                    textTransform="none"
                >
                    Đã xong: {data.allTask === 0 ?  '0/0' : `${data.completed}/${data.allTask}`}
                </Typography>

                <Tooltip title={<h5>Nhấn để xem chi tiết KPI</h5>} sx={{ marginTop: "3%", marginBottom: "3%" }}>
                    <Button variant='contained' color='info' onClick={navigateToKPI}>
                        Xem KPI
                    </Button>
                </Tooltip>
            </Box>
        </Card >
    )
}

export default DefaultKPICard;