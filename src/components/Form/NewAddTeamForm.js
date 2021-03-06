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
    width: 500,
    height: 375,
    bgcolor: 'background.paper',
    border: 1,
    boxShadow: 24,
    p: 4,
    borderRadius: "10px",
};

const NewAddTeamForm = ({ open, onChangeKPIForm }) => {
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
                    Nhập thông tin về nhóm mới
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: "5%"
                    }}
                >
                    <Typography sx={{ fontWeight: "bold", flex: 5, fontSize: "20px" }}>Tên nhóm</Typography>
                    <TextField
                        id="outlined-password-input"
                        type="text"
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
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: "5%"
                    }}
                >
                    <Typography sx={{ fontWeight: "bold", flex: 5, fontSize: "20px" }}>Quản đốc </Typography>
                    <Box sx={{ width: "70%" }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Danh sách quản đốc</InputLabel>
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
                        marginLeft: "35%",
                        marginTop: "7.5%",
                        marginBottom: "5%",
                        width: "25%",
                        height: "10%",
                        fontSize: "18px"
                    }}
                >
                    Tạo
                </Button>

            </Box>
        </Modal>
    );
}

export default NewAddTeamForm;