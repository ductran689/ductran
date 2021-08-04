import React from 'react'
import { menuSelector } from '../features/myweb/contentSlice'
import { useSelector } from 'react-redux'
const NavBar = () => {

    //móc menu trong store
    const menus= useSelector(menuSelector)
    return (
        <div className="nav">
            <div className="overlay"></div>
            <div className="nav-btn-container">
                <div className="nav-btn"></div>
            </div>
            <div className="nav-list">
                <ul>
                    {menus.map((menu,i)=>{
                        return(
                            <li key={menu.id}>{menu.title}</li>
                            )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default NavBar
