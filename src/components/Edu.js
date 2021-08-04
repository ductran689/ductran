import React from 'react'
import { useSelector } from 'react-redux'
import { eduSelector } from '../features/myweb/contentSlice'

const Edu = () => {

    // select edus from store
    const edus= useSelector(eduSelector)

    return (
        <section className="edu section-container">
            <h2 className="title">Education</h2>
            <div className="container">
            {edus.map((edu,i) => {
                        return (
                            <div key={edu.id} 
                            className={`flex-content education__items--${edu.id}`}
                            //onMouseOver={()=> circleLight(i)}
                            //onMouseOut={()=>circleDark(i)}
                            >
                                
                                <div className={`num num${i}`}>
                                    <p className={`int${i} int`}>{i+1}</p>
                                </div>
                                

                                <h4>{edu.uni}</h4>
                                <p className="degree"> {edu.degree} <br />

                                </p>


                            </div>
                        )
                    })}
            </div>
            
        </section>
    )
}

export default Edu
