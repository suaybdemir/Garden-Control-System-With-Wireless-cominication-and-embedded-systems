import React, { useEffect } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { getSensorHistories } from '../redux/slices/sensorHistorySlice';
import SensorHistory from './SensorHistory';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import ScheduleIcon from '@mui/icons-material/Schedule';
import { Box } from '@mui/material';
import SanitizerIcon from '@mui/icons-material/Sanitizer';
import OilBarrelIcon from '@mui/icons-material/OilBarrel';


function SensorHistoryList() {

  const sensorHistories = useSelector((state) => state.sensorHistory.sensorHistories)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSensorHistories())
  }, [])

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#4E342E",
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 16,
    },
  }));


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>
              <Box display="flex" alignItems="center" gap={0.5} sx={{color:"#fffff"}}>
                <ScheduleIcon />
                <span>Tarih</span>
              </Box>
            </StyledTableCell>
            <StyledTableCell >
              <Box display="flex" alignItems="center" gap={0.5} sx={{color:"#9E9D24	"}}>
                <OilBarrelIcon />
                <span>Toprak Nemi</span>
              </Box>
            </StyledTableCell>
            <StyledTableCell>
              <Box display="flex" alignItems="center" gap={0.5} sx={{color:"#FC6C85"}} >
                <DeviceThermostatIcon/>
                <span>Sıcaklık</span>
              </Box>
            </StyledTableCell>
            <StyledTableCell>
              <Box display="flex" alignItems="center" gap={0.5} sx={{color:"#64B5F6	"}}>
                <WaterDropIcon />
                <span>Yağmur Değeri</span>
              </Box>
            </StyledTableCell>
            <StyledTableCell>
              <Box display="flex" alignItems="center" gap={0.5} sx={{color:"#00C9A7	"}}>
                <SanitizerIcon/>
                <span>Su Pompası Durumu</span>
              </Box>
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            sensorHistories && sensorHistories.map((sensorHistory) => (
              <SensorHistory sensorHistory={sensorHistory} key={sensorHistory.sensorHistoryId} />
            ))
          }


        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default SensorHistoryList