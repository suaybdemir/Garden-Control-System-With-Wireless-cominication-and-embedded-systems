import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import YardIcon from '@mui/icons-material/Yard';
function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:"#2E7D32"}}>
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <YardIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Tarla Kontrol Ekranı
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header