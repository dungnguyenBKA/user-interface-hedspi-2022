import React from 'react';
import Card from '@mui/material/Card';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";

const DefaultKPICard = ({ data }) => {
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
                height: 1
            }}
        >

            <Box mt={1} mx={0.5}>
                <Typography
                    variant='button'
                    fontWeight="bold"
                    color="text"
                    textTransform="none"
                >
                    {data.name}
                </Typography>
            </Box>

            <Box
                mt={1}
                mx={0.5}
                sx={{
                    textAlign: "center"
                }}
            >
                <Typography variant='button' fontWeight="regular" color="red" textTransform="none">
                    Hạn bàn giao: {data.deadline}
                </Typography>
            </Box>

            <Box
                position="relative"
                width="100.25%"
                shadow="xl"
                borderRadius="xl"
            >

            </Box>

            <Box mt={1} mx={0.5}>
                <Tooltip
                    title={<h3>Số công việc đã hoàn thành/Tổng số công việc</h3>}
                >
                    <Typography variant='button' fontWeight="regular" color="text">
                        {`${data.completed}/${data.allTask}`}
                    </Typography>
                </Tooltip>
            </Box>

            <Box mt={1} mx={0.5}>
                <Button variant='contained' color='info'>
                    Xem KPI
                </Button>
            </Box>

        </Card>
    )
}

export default DefaultKPICard;