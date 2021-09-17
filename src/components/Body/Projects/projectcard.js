import React from 'react'
import './projectcard.css'

function ProjectCard({project}) {
    return (
        <div className="project-card">
            <div className="project-info">
            <label>{project.title}</label>
            <div className="project-links">
                {project.demo&& <a>
                    <div>
                        
                    </div>
                    </a>}

            </div>
            </div>
            <img src={project.image} className="project-image" />
        </div>
    )
}

export default ProjectCard;

