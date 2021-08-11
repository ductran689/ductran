import React from 'react';
import Describe from './Describe';
import Intro from './Intro';
import Main from './Main';
import Menu from './Menu';



const Body = () => {

    return (
        <div className="body">
           
                <div className="ava-corner">
                    <img src="/images/IMG_0423.JPG" alt="" className="avatar1" />

                </div>
                
               
                <Intro />
                <Describe />
                <Main />
              
            </div>

        
    )
}

export default Body
