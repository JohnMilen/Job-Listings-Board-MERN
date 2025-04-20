import {Job} from '../models/jobModel.js'

export const postJob = async(req,res)=>{
    try{
        const {title,company,location,type,description} = req.body;
        if(!title || !company || !location || !type || !description){
            return res.status(400).json({success: false,message: 'please fill all fields'})
        }
        const posted = await Job.create({title,company,location,type,description})
        res.status(200).json({success: true,message: 'Job created',data: posted})
    }catch(err){
        console.log(`Post Job error : ${err.message}`)
        res.status(400).json({success: false,message: 'Internal Server Error'})
    }
}

export const getAllJobs = async(req,res)=>{
    try{
        const {search} = req.query;
        const query = search ? { $or: [ {title: new RegExp(search,'i')} , {company: new RegExp(search,'i')} ] } : {};
        const getAll = await Job.find(query).sort({createdAt: -1})
        res.status(200).json({success: true,message: 'Get All Jobs',data: getAll})
    }catch(err){
        console.log(`Get All Jobs error : ${err.message}`)
        res.status(400).json({success: false,message: 'Internal Server Error'})
    }
}