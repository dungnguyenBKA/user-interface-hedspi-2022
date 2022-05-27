import React from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Card, Typography, Tooltip } from "@mui/material";

const AddKPICard = () => {
    return (
        <Card
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: "white",
                boxShadow: 5,
                border: 1,
                overflow: "visible",
                height: 1
            }}
        >
            <Tooltip
                title={<h2>Nhấn để thêm KPI mới</h2>}
                sx={{
                    marginTop: "18%"
                }}
            >
                <AddCircleOutlineIcon fontSize='large' />
            </Tooltip>
            <Typography
                variant='button'
                fontWeight="bold"
                color="text"
                textTransform="none"
                sx={{
                    marginBottom: "18%"
                }}
            >
                Thêm KPI
            </Typography>


        </Card>
    )
}

export default AddKPICard;