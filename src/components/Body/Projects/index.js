import React from 'react';
import './projects.css';
import { ProjectData } from "../../data/projects.js";
import  ProjectCard  from './projectcard.js';
import Seperator from '../../common/seperator';


function Projects() {
    
    const data = ProjectData;

    return (
        <div className="projects">
            <Seperator />
            <label className="section-title">Projects</label>
            <div>
                {data.map((project) => {
                  return <ProjectCard project={project} /> })} 
            </div>
        </div>
    )
}

export default Projects;
