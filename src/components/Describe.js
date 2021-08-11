import { gsap } from 'gsap'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { rightAppear, rightAppearMobile, toggleFlag } from '../features/myweb/contentSlice'
import useMedia from '../hooks/useMedia'
const Describe = () => {
   /*  // mediaquery
    const xxs = useMediaQuery({ query: '(max-width: 575px)' })
    const xs = useMediaQuery({ query: '(max-width: 767px)' })
    const sm = useMediaQuery({ query: '(max-width: 991px)' })
    const md = useMediaQuery({ query: '(max-width: 1199px)' })
 */

    const{xxs,xs,sm,md,xsMin,smMin,mdMin} =useMedia()
    //
    const des = [
        {
            //text1:'After acquainted myself with HTML, CSS, JavaScript, this is the first web develop agency in my career ',
            main: ' A Web-Devloper',
            // text2:'Being the first place where I gained my professional working experience in Australia. '
        },
        {
            main: 'Who fuelled by his passion about making beautiful & hand-crafted websites. '
        },
        {
            main: 'Whether you are friends or clients,  '
        },
        {
            main: 'You are welcome to have a look of my info'
        },

    ]

    useEffect(() => {
        gsap.to('.line0,.line1,.line2,.line3', 1, { marginLeft: '0%' })
    }, [])

    const dispatch = useDispatch()
    const btnClick = () => {
        
        if(xs ) {
            dispatch(rightAppearMobile())
           

        } else{
            dispatch(rightAppear())
            

        }

        
    }

    // ==========mobile===========
    const btnClickMobile = () => {
       // dispatch(toggleFlag())
        dispatch(rightAppearMobile())
    }
    return (
        <div className="des">
            {des.map((des, i) => {
                return (
                    <p className={`line${i}`} key={i}>
                        <span className={`text${i}1`}>{des.text1}</span>
                        <span className={`main${i}`}>{des.main}</span>
                        <span className={`text${i}2`}>{des.text2}</span>
                    </p>
                )
            })}
            <a className="more" onClick={btnClick}> More About Me</a>

        </div>
    )
}

export default Describe
