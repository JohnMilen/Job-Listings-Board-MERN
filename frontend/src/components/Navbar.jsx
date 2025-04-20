import React from 'react'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import { DarkMode, LightMode } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const Navbar = ({theme,setTheme}) => {
  return (
    <AppBar position='sticky'>
      <Toolbar sx={{display:'flex',justifyContent:'space-evenly',alignItems:'center'}}>
        <Typography component={Link} to={'/'} variant='h6' sx={{fontSize:{md:'1.7rem',xs:'1.2rem'},textDecoration:'none',color:'white'}}>
          Job Listings Board
        </Typography>
        <IconButton sx={{color: theme === 'light' ? 'orange':'white'}} onClick={()=>setTheme(theme === 'light' ? 'dark': 'light')}>
          {theme === 'light' ? <LightMode />: <DarkMode />}
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar