import React, { useState } from 'react'
import { rightDisAppear, rightAppearMobile, navBtn,navHide,flagSelector,toggleFlag } from '../features/myweb/contentSlice'
import { useDispatch,useSelector } from 'react-redux'
const Hambuger = () => {

    const dispatch= useDispatch()
    const flag = useSelector(flagSelector)
    const navClick= ()=>{
        dispatch(toggleFlag())
        console.log(flag);
       flag ? dispatch(navBtn()) : dispatch(navHide())
    }
    return (
        <div className='hambuger-container' onClick={navClick}>
            <div className="hambuger"></div>
        </div>
    )
}

export default Hambuger
