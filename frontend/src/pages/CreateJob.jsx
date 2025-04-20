import React, { useState } from 'react'
import { Button, Container, MenuItem, Paper, TextField, Typography } from '@mui/material'
import { toast, ToastContainer } from 'react-toastify'
import useJobStore from '../store/job.js'
import { useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';

const jobTitles = [
  "Front-End Developer",
  "Back-End Developer",
  "Full-Stack Developer",
  "Software Engineer",
  "DevOps Engineer",
  "Data Scientist",
  "Machine Learning Engineer",
  "AI Engineer",
  "Web Developer",
  "Mobile App Developer",
  "QA Engineer",
  "Cloud Engineer",
  "Cybersecurity Analyst",
  "Database Administrator",
  "UI/UX Designer",
  "Product Manager",
  "Game Developer",
  "Blockchain Developer",
  "Network Administrator",
  "Data Analyst",
  "Business Intelligence Analyst",
  "Data Engineer",
  "Statistician",
  "Data Architect",
  "Quantitative Analyst",
  "Research Analyst",
  "Business Analyst",
  "Project Manager",
  "Operations Manager",
  "Product Manager",
  "Program Manager",
  "Chief Executive Officer",
  "Chief Operating Officer",
  "Chief Technology Officer",
  "Chief Marketing Officer",
  "Office Manager",
  "Administrative Assistant",
  "Graphic Designer",
  "UI/UX Designer",
  "Motion Designer",
  "Animator",
  "Video Editor",
  "Art Director",
  "Creative Director",
  "Illustrator",
  "Photographer",
];
const jobLocations = [
  "New York, USA",
  "San Francisco, USA",
  "Los Angeles, USA",
  "Chicago, USA",
  "Seattle, USA",
  "Austin, USA",
  "Boston, USA",
  "Atlanta, USA",
  "Toronto, Canada",
  "Vancouver, Canada",
  "Montreal, Canada",
  "Calgary, Canada",
  "Ottawa, Canada",
  "London, UK",
  "Manchester, UK",
  "Birmingham, UK",
  "Edinburgh, UK",
  "Bristol, UK",
  "Berlin, Germany",
  "Munich, Germany",
  "Frankfurt, Germany",
  "Hamburg, Germany",
  "Paris, France",
  "Lyon, France",
  "Marseille, France",
  "Toulouse, France",
  "Bangalore, India",
  "Hyderabad, India",
  "Mumbai, India",
  "Coimbatore, India",
  "Chennai, India",
  "Delhi, India",
  "Pune, India",
  "Kolkata, India",
  "Ahmedabad, India",
  "Sydney, Australia",
  "Melbourne, Australia",
  "Brisbane, Australia",
  "Perth, Australia",
  "Dubai, UAE",
  "Abu Dhabi, UAE",
  "Singapore",
  "Tokyo, Japan",
  "Osaka, Japan",
  "Beijing, China",
  "Shanghai, China",
  "Shenzhen, China",
  "Seoul, South Korea",
  "Johannesburg, South Africa",
  "Cape Town, South Africa",
  "Amsterdam, Netherlands",
  "Rotterdam, Netherlands",
  "Dublin, Ireland",
  "São Paulo, Brazil",
  "Rio de Janeiro, Brazil",
  "Mexico City, Mexico",
];
const jobTypes = [
  "Full-Time",
  "Part-Time",
  "Internship",
  "Freelance",
  "Temporary",
  "Volunteer",
  "Apprenticeship",
  "Seasonal",
  "Remote",
  "Hybrid",
  "On-Site",
  "Rotational",
];


const CreateJob = () => {
  const [newJob,setNewJob] = useState({title:"",company:"",location:"",type:"",description:""})
  const navigate = useNavigate()
  const {postJob} = useJobStore()
  const handleAddJob = async(newJob)=>{
    const {success,message} = await postJob(newJob)
    if(!success){
      toast.error(message,{position:'top-right'})
    }else{
      toast.success(message,{position:'top-right'})
      setTimeout(() => {
        navigate('/')
      }, 3000);
    }
  }
  return (
    <Container maxWidth='sm'>
      <ToastContainer />
      <Paper elevation={3} sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',p:3,mt:5}}>
        <Typography variant='h5' align='left' sx={{fontWeight:'bold'}}>
          Create Job
        </Typography>
        <TextField 
          label="Title"
          fullWidth
          select
          sx={{my:1}}
          value={newJob?.title}
          onChange={(e)=>setNewJob({...newJob,title: e.target.value})}
        >
          <MenuItem value='' disabled>Choose Anyone</MenuItem>
          {jobTitles.map((j,i)=>(
            <MenuItem value={j} key={i}>{j}</MenuItem>
          ))}
        </TextField>
        <TextField 
          label="Company"
          fullWidth
          sx={{my:1}}
          value={newJob?.company}
          onChange={(e)=>setNewJob({...newJob,company: e.target.value})}
        />
        <TextField 
          label="Location"
          fullWidth
          select
          sx={{my:1}}
          value={newJob?.location}
          onChange={(e)=>setNewJob({...newJob,location: e.target.value})}
        >
          <MenuItem value="" disabled>Choose Anyone</MenuItem>
          {jobLocations.map((j,i)=>(
            <MenuItem value={j} key={i}>{j}</MenuItem>
          ))}
        </TextField>
        <TextField 
          label="Type"
          fullWidth
          sx={{my:1}}
          select
          value={newJob?.type}
          onChange={(e)=>setNewJob({...newJob,type: e.target.value})}
        >
          <MenuItem value='' disabled>Choose Anyone</MenuItem>
          {jobTypes.map((j,i)=>(
            <MenuItem value={j} key={i}>{j}</MenuItem>
          ))}
        </TextField>
        <TextField 
          label="Description"
          fullWidth
          sx={{my:1}}
          value={newJob?.description}
          onChange={(e)=>setNewJob({...newJob,description: e.target.value})}
        />
        <Button 
          variant='contained'
          fullWidth
          sx={{my:1}}
          onClick={()=>handleAddJob(newJob)}
        >
          Post job
        </Button>
      </Paper>
    </Container>
  )
}

export default CreateJob