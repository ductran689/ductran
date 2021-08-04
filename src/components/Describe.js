import React from 'react'
import { useEffect } from 'react'
import{gsap} from 'gsap'
import { useDispatch } from 'react-redux'
import { useMediaQuery } from 'react-responsive'
import { rightAppear,rightAppearMobile } from '../features/myweb/contentSlice'
const Describe = () => {
    // mediaquery
    const xxs= useMediaQuery({query: '(max-width: 575px)'})
    const xs= useMediaQuery({query: '(max-width: 767px)'})
    const sm= useMediaQuery({query: '(max-width: 991px)'})
    const md= useMediaQuery({query: '(max-width: 1199px)'})
    
      //
    const des=[
        {
            //text1:'After acquainted myself with HTML, CSS, JavaScript, this is the first web develop agency in my career ',
            main:' A Fresh Web-Devloper',
           // text2:'Being the first place where I gained my professional working experience in Australia. '
        },
        {
            main:'A Fresh Web-Devloper'
        },
        {
            main:'A Fresh Web-Devloper'
        },
        {
            main:'A Fresh Web-Devloper'
        },

    ]

    useEffect(()=>{
        gsap.to('.line0,.line1,.line2,.line3',1,{marginLeft:'0%'})
    },[])

    const dispatch= useDispatch()
    const btnClick=()=>{
        dispatch(rightAppear())
    }

    // ==========mobile===========
    const btnClickMobile=()=>{
        dispatch(rightAppearMobile())
    }
    return (
        <div className="des">
            {des.map((des,i)=>{
                return(
                    <p className={`line${i}`}>
                        <span className={`text${i}1`}>{des.text1}</span>
                        <span className={`main${i}`}>{des.main}</span>
                        <span className={`text${i}2`}>{des.text2}</span>
                        </p>
                    )
            })}
            {xxs && <a  className="moreM" onClick={btnClickMobile}> More About Me</a>}
             <a  className="more" onClick={btnClick}> More About Me</a>
        </div>
    )
}

export default Describe
