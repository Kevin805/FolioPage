import React from 'react';
import './projects.css';
import { ProjectData } from "../../../data/projects.js";
import  ProjectCard  from "./projectcard.js";


function Projects() {
    
    const data = ProjectData;

    return (
        <div className="projects">
            <label>Projects</label>
            <div>
                {data.map((project) => {
                  return <ProjectCard /> })}
            </div>
        </div>
    )
}

export default Projects;
