import React, { useState } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Card, Typography, Tooltip } from "@mui/material";
import { IconButton } from '@mui/material';
import NewAddTeamForm from '../Form/NewAddTeamForm'

const AddTeamCard = () => {

    const [open, setOpen] = useState(false);
    const onChangeKPIForm = () => setOpen(!open);

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
                height: 1,
                borderRadius: "5%"
            }}
        >
            <Tooltip
                title={<h2>Nhấn để tạo nhóm</h2>}
                sx={{
                    marginTop: "60%"
                }}
            >
                <IconButton onClick={onChangeKPIForm}>
                    <AddCircleOutlineIcon fontSize='large'/>
                </IconButton>
            </Tooltip>

            <Typography
                variant='button'
                fontWeight="bold"
                color="text"
                textTransform="none"
                fontSize="22px"
                sx={{
                    marginBottom: "60%"
                }}
            >
                Tạo team mới
            </Typography>
            <NewAddTeamForm open={open} onChangeKPIForm={onChangeKPIForm}/>
        </Card>
    )
}

export default AddTeamCard;