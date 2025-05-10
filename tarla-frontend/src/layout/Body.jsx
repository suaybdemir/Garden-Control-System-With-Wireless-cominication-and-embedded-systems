import { Box } from '@mui/material'
import React from 'react'
import SensorHistoryList from '../components/SensorHistoryList'

function Body() {
  return (
    <Box sx={{marginTop:"20px"}}>
      <SensorHistoryList/>
    </Box>
  )
}

export default Body