import React,{useState} from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Button } from "@mui/material";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { KPIMockData, jobDataRows } from './KPIMockData';
import JobTable from '../../components/KPITable/JobTable';
import NewForm from '../../components/Form/NewForm';
import useStorage from './useStorage';
const ManagerSingleKPI = () => {
    const [KPIData, putKPIData, clearKPIData] = useStorage();
    const onAddNewKPI = (newKPI) => {
        putKPIData([...KPIData, newKPI]);
    }
    const [open, setOpen] = useState(false);
    const onChangeKPIForm = () => setOpen(!open);
    const { id } = useParams(); //must be the same as in route in App.tsx
    const convertedId = parseInt(id);
    console.log(id === 2);

    const singleKPI = KPIMockData.filter(element => element.id === convertedId)[0];
    console.log(singleKPI);

    const precise = (x) => {
        return x.toPrecision(4);
    }

    const value = precise(singleKPI.completed / singleKPI.allTask * 100);

    const dataRows = jobDataRows.filter(element => element.id === convertedId);

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
                fontWeight="bold"
                sx={{
                    fontSize: "30px",
                    textAlign: "center",
                    marginTop: "20px",
                    color: 'dodgerblue'
                }}
            >
                KPI: {singleKPI.name}
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    alignItem: "center",
                    justifyContent: "center",
                    marginTop: "17.5px",
                }}
            >
                {/* <Button
                    variant='contained'
                    color='success'
                    sx={{
                        width: '15%',
                        fontSize: "20px"
                    }}
                >
                    Chỉnh sửa KPI
                </Button> */}
            </Box>

            {/* Box has 2 element in a row 40-60 */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
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
                            width: "65%",
                            height: "65%",
                            marginBottom: "10px",
                        }}
                    >
                        <CircularProgressbar
                            value={value}
                            text={`${value}%`}
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
                        Số công việc hoàn thành: {`${singleKPI.completed} / ${singleKPI.allTask}`}
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
                        color="red"
                        textTransform="none"
                        fontSize="25.5px"
                        sx={{
                            marginBottom: "5%"
                        }}
                    >
                        Hạn chót: {singleKPI.deadline}
                    </Typography>

                    <Typography
                        variant='button'
                        fontWeight="bold"
                        color="text"
                        textTransform="none"
                        fontSize="25.5px"
                    >
                        Quản đốc phụ trách: {singleKPI.manager}
                    </Typography>
                </Box>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography
                    fontWeight="bold"
                    sx={{
                        fontSize: "28.5px",
                        textAlign: "center",
                        // marginTop: "20px"
                    }}
                >
                    Danh sách công việc
                </Typography>

                {/* Table */}
                <JobTable rows={dataRows} />

                <Button
                    variant="contained"
                    color="error"
                    sx={{
                        marginTop: "20px",
                        marginBottom: "20px",
                        fontSize: "20px"
                    }}
                    onClick={onChangeKPIForm}
                >
                   Thêm công việc mới
                </Button>
                <NewForm open={open} title="Nhập thông tin về công việc mới" titleList="Danh sách công nhân" tittleButton="Thêm công việc" titleName="Tên công việc" onChangeKPIForm={onChangeKPIForm} onAdd={onAddNewKPI}/>
            </Box>



        </Box>
    );
}

export default ManagerSingleKPI;