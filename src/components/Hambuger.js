import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { flagSelector, navBtn, navHide, toggleFlag } from '../features/myweb/contentSlice'
const Hambuger = () => {

    const dispatch= useDispatch()
    const flag = useSelector(flagSelector)
    const navClick= ()=>{
        dispatch(toggleFlag())
        console.log('flag'+flag);
       flag ? dispatch(navBtn()) : dispatch(navHide())
    }
    return (
        <div className='hambuger-container' onClick={navClick}>
            <div className="hambuger"></div>
        </div>
    )
}

export default Hambuger
