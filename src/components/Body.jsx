import React from 'react'
import Main from './Main'
import Footer from './Footer';
import Menu from './Menu';
import Intro from './Intro';
import Describe from './Describe';



const Body = () => {

    return (
        <div className="body">
            <div className="container-fluid">
                <div className="ava-corner">
                    <img src="/images/IMG_0423.JPG" alt="" className="avatar1" />

                </div>
                
                <Menu />
                <Intro />
                <Describe />
                <Main />
                <Footer />
            </div>

        </div>
    )
}

export default Body
