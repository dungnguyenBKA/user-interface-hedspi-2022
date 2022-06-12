import React,{useState} from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {Typography,InputBase} from '@mui/material';
import {KPIMockData, ManagerList} from './KPIMockData';
import ManagerKPICard from '../../components/KPICard/ManagerKPICard';
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/footer";
import SearchIcon from '@mui/icons-material/Search';
import useStorage from './useStorage';
const ManagerKPI = () => {
  const [KPIData, putKPIData, clearKPIData] = useStorage();

  const [searchName, setSearchName] = useState('');
  const onChangeSearchName = (event) => {
      if (event.target.value === '') {
          putKPIData(KPIMockData);
          setSearchName('');
      } else {
          setSearchName(event.target.value);
          const newKPIArray = KPIData.filter(
              element => element.name.includes(searchName) === true
          );
          console.log(searchName);
          console.log(KPIData);
          putKPIData(newKPIArray);
      }
  }
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
      <NavBar/>

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
        KPI được giao cho Quản đốc: {ManagerList[1].name}
      </Typography>
      <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        border: 0.5,
                        width: "25%",
                        height: "50px",
                        borderRadius: "10px",
                        marginTop: "1%",
                        marginLeft:"38%"
                    }}
                >
                    <InputBase
                        placeholder='Tìm KPI theo tên'
                        value={searchName}
                        onChange={onChangeSearchName}
                        sx={{ marginLeft: "2.5%", flex: 5 }}
                    />

                    <SearchIcon sx={{ flex: 1 }} />
                </Box>
      <Box p={5}>
        <Grid container spacing={6}>
          {KPIMockData.map((element) => (
            <Grid
              item xs={12} sm={6} md={4} lg={3} xl={2}
              key={element.id}
            >
              <ManagerKPICard data={element}/>
            </Grid>
          ))}
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          </Grid>
        </Grid>
      </Box>
      <Footer/>
    </Box>
  );
}

export default ManagerKPI;
