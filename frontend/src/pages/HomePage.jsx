import React, { useEffect, useState } from 'react'
import { Box, Button, Container, Paper, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { Add } from '@mui/icons-material'
import useJobStore from '../store/job.js'

const HomePage = () => {
  const [search,setSearch] = useState("")
  const {jobs,getAllJobs} = useJobStore()
  useEffect(()=>{
    getAllJobs(search)
  },[getAllJobs,search])
  return (
    <Container maxWidth='sm'>
      <Box sx={{display:'flex',flexDirection:{md:'row',xs:'column'},justifyContent:'space-evenly',alignItems:'center', mb: 2 }}>
        <Typography variant='h4' align='center' sx={{textTransform:'uppercase',fontWeight:'bold',mt:5,mb:2}}>
          Job Listings
        </Typography>
        <Box component={Link} to={'/create'}>
          <Button variant='outlined' sx={{textTransform:'capitalize',mt:2}} startIcon={<Add />}>
            Create Job
          </Button>
        </Box>
      </Box>
      <TextField 
        label="Search by title or company..."
        fullWidth
        sx={{my:1}}
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
      />
      {jobs.map((j)=>(
      <Paper key={j._id} elevation={0} sx={{border:'1px solid gray',py:1,px:3,my:1}}>
        <Typography variant='body1' sx={{textTransform:'capitalize',fontWeight:'bold',my:1}}>
          {j.title}
        </Typography>
        <Typography variant='body1' sx={{my:1}}>
          {j.company}--{j.location}
        </Typography>
        <Typography variant='body2' sx={{color:'gray',my:1}}>
          {j.type}
        </Typography>
        <Typography variant='body1' sx={{fontWeight:'normal',my:1}}>
          {j.description}
        </Typography>
      </Paper>
      ))}
    </Container>
  )
}

export default HomePage