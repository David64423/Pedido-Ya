//import {Project} from './../models/project.js';

export const getProjects = (req, res)=>{
    res.send('getting projects');
}


export const createProject = async (req, res)=>{
   // const {name, priority, description} = req.body;

/*const newProject=await Project.create({
        name,
        priority,
        description: description
    })

    console.log(newProject); */

    res.send('creating projects');
}