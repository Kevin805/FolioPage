import React from 'react'
import './projectcard.css'

function ProjectCard({project}) {
    return (
        <div className="project-card">
            <div className="project-info">
            <label>{project.title}</label>
            <div className="project-links">
                {project.demo && (
                <a className="project-name" href={project.demo}>
                    <div className="link-button">
                        <i className="fi-rr-disk"></i>Demo
                    </div>
                </a>
                )}
                {project.github && (
                <a className="project-name" href={project.github}>
                    <div className="link-button">
                    <i className="devicon-github-original colored"></i>Github
                    </div>
                </a>
                )}
            </div>
            <p>{project.about}</p>
        </div>
            <img src={project.image} className="project-image" />
        </div>
    )
}

export default ProjectCard;

