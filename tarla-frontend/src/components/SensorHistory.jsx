import React from 'react'
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
function SensorHistory({sensorHistory}) {

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  return (
    <StyledTableRow >
      <StyledTableCell component="th" scope="row">
        {sensorHistory.timestamp}
      </StyledTableCell>
      <StyledTableCell sx={{ paddingLeft:"60px" }} align="left">{sensorHistory.soilHumidity}</StyledTableCell>
      <StyledTableCell sx={{ paddingLeft:"55px" }} align="left">{sensorHistory.temperature}</StyledTableCell>
      <StyledTableCell sx={{ paddingLeft:"42px" }} align="left">{sensorHistory.rainSensorValue}</StyledTableCell>
      <StyledTableCell sx={{ paddingLeft:"80px" }} align="left">{sensorHistory.waterPumpStatus}</StyledTableCell>
    </StyledTableRow>
  )
}

export default SensorHistory   