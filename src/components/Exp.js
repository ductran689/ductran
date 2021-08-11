import React from 'react'
import { useSelector } from 'react-redux'
import { expSelector } from '../features/myweb/contentSlice'

const Exp = () => {

    // select exp from store
    const exps= useSelector(expSelector)
    return (
        <section className="exp section-container"  id="experience">
            <h2 className="title">Experience</h2>
            <div className="container">
            {exps.map(exp => {
                        return (
                            <div key={exp.id} className="flex-content exp-content" >
                                <div className="timeline">
                                    <div className="circle"> </div>
                                    <div className="line" ></div>
                                </div>
                                <div className="period">
                                <span className="time"> {exp.time1} </span>
                                <span> ---  </span>
                                <span className="time">{exp.time2}</span>
                                </div>


                                <div className="company-task">
                                    <div className="jobtitle">
                                        <h4>{exp.position}</h4>
                                        <h5>{exp.company}</h5>
                                    </div>
                                    <ul className="task-list">
                                        <li  >{exp.task}</li>

                                    </ul>
                                </div>





                            </div>
                        )

                    })}
            </div>
        </section>
    )
}

export default Exp
