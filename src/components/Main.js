import React from 'react'
import Projects from './Projects'
import Skills from './Skills'
import Edu from './Edu'
import Exp from './Exp'
import Footer from './Footer'
import Back2Top from '../components/Back2Top'
const Main = () => {
    return (

        <div className="main">
            <Skills />
            <Projects />
            <Edu />
            <Exp />
            <Footer/>
            <Back2Top/>
        </div>

    )
}

export default Main
