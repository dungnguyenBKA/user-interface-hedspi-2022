import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from "@mui/material/Button";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 550,
    height: 400,
    bgcolor: 'background.paper',
    border: 1,
    boxShadow: 24,
    p: 4,
    borderRadius: "10px",
};

const NewForm = ({ open,title,titleName,titleList,tittleButton, onChangeKPIForm,onAdd }) => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <Modal
            open={open}
            onClose={onChangeKPIForm}
        >
            <Box sx={style}>
                <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    fontWeight="bold"
                    sx={{ textAlign: "center" }}
                >
                   {title}
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: "5%"
                    }}
                >
                    <Typography sx={{ fontWeight: "bold", flex: 5, fontSize: "20px" }}>{titleName}</Typography>
                    <TextField
                        id="outlined-password-input"
                        label={titleName}
                        type="text"
                        // autoComplete="current-password"
                        sx={{ width: "70%" }}
                    />
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: "5%"
                    }}
                >
                    <Typography sx={{ fontWeight: "bold", flex: 5, fontSize: "20px" }}>Hạn chót</Typography>
                    <TextField
                        id="outlined-password-input"
                        label="Ngày hạn chót"
                        type="text"
                        // autoComplete="current-password"
                        sx={{ width: "70%" }}
                    />
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: "5%"
                    }}
                >
                    <Typography sx={{ fontWeight: "bold", flex: 5, fontSize: "20px" }}>Giao việc cho </Typography>
                    <Box sx={{ width: "70%" }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">{titleList}</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                // value={age}
                                // label="Danh sách quản đốc"
                                onChange={handleChange}
                            >
                                <MenuItem value={'Nguyễn Min Dũn'}>Nguyễn Min Dũn</MenuItem>
                                <MenuItem value={'Nguyễn Gia Thanh'}>Nguyễn Gia Thanh</MenuItem>
                                <MenuItem value={'Nguyễn Viết Huy'}>Nguyễn Viết Huy</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Box>

                <Button
                    variant='contained'
                    color='success'
                    sx={{
                        marginLeft: "25%",
                        marginTop: "7.5%",
                        marginBottom: "5%",
                        width: "50%",
                        height: "10%",
                        fontSize: "18px"
                    }}
                    onClick={onAdd}
                >
                    {tittleButton}
                </Button>

            </Box>
        </Modal>
    );
}

export default NewForm;