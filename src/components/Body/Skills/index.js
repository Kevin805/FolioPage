import React from 'react'
import Seperator from '../../common/seperator'
import { SkillsData } from '../../data/skills'
import "./skills.css"
import SkillCard from './skillscard'

function Skills() {
    
    const data = SkillsData

    return (
        <div className="skilss">
            <Seperator />
            <label className="section-title">Skills</label>
            <div className="skills-container">
                {data.map((item) => {
                return(
                    <div className="skills-section">
                        <label className="skills-section-title">{item.type}</label>
                        <div className="skills-list">
                           {item.list.map((skill) => {
                               return(
                                   <SkillCard skill={skill} />
                               )
                           })} 
                        </div>
                    </div>
                );
                })}
            </div>
        </div>
    )
}

export default Skills
