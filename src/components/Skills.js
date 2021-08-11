import React from 'react'

const Skills = () => {
    const skills = [
        {
            title: 'Front-End',
            skill1: 'HTML, HTML5',
            skill2: 'CSS,SASS,SCSS',
            skill3: 'Javascript,Jquery',
            skill4: 'Reactjs'
        },
        {
            titleM: 'Telecom',
            title:'Telecommunication',
            skill1: 'MATLAB',
            skill2: 'RES controller',
            skill3: 'Javascript,Jquery',
            skill4: 'Reactjs'
        }
    ]
    return (
        <section className="skills section-container" id="skills">
            <h2 className="title">Skills</h2>
            <div className="container">
                
            {skills.map((skill, i) => {
                return (
                    <div className={`skill-item skill-item${i}`} key={i}>
                        <h3 className="skill-title">{skill.title}</h3>
                        <ul >
                            <li>{skill.skill1}</li>
                            <li>{skill.skill2}</li>
                            <li>{skill.skill3}</li>
                            <li>{skill.skill4}</li>

                        </ul>
                    </div>

                )
            })}
            </div>
           

        </section>
    )
}

export default Skills
