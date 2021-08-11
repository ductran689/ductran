import React, { useEffect,useLayoutEffect } from 'react'
import {gsap,Bounce} from 'gsap'
import { TextPlugin } from "gsap/TextPlugin"
import Describe from './Describe';
const Intro = () => {

    //register gsap plugin
    gsap.registerPlugin(TextPlugin);
    // animation 1st load
    useLayoutEffect(()=>{
        gsap.set('.ava-corner',{marginTop:'-100%',display:'none'})
       // gsap.set('.ava-container',{y:-100})
        const tl1=gsap.timeline()
        
        tl1
        //.fromTo('.ava-container',1,{transform:'scale(0)'},{transform:'scale(1)'})
        .fromTo('.ava-container',1,{y:-100},{y:0, ease:Bounce.easeOut,delay:.8})
        
        const tl = gsap.timeline({delay:1.8})
        tl
        .to('.myname',1,{text:{value:'TRAN DUY DUC'}})
        .to('.myname',1,{text:{value:'TRAN DUY DUC',newClass:"ducred"}})
    
    },[])
    
    return (
        <section className="intro">
          <div className="ava-name">
          <div className="ava-container">
            <img src="/images/avatar-web.png" alt="" className="avatar" />

            </div>
                <h1 className="myname"></h1>
          </div>
          <Describe/>
        </section>
    )
}

export default Intro
