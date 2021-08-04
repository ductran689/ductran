import { gsap } from 'gsap';
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFlag1, menuSelector, rightAppear, scrollFunc } from '../features/myweb/contentSlice';
const Menu = () => {
    //register gsap plugin
    gsap.registerPlugin(ScrollToPlugin);
    gsap.registerPlugin(CSSRulePlugin);
    // dispatch
    const dispatch = useDispatch()
    // selector móc state menu trong slice ra
    const menus = useSelector(menuSelector)
    
    // event functions

    const menuClick1 = (id, time, e) => {
        e.preventDefault();              
        dispatch(changeFlag1())
        dispatch(rightAppear())
        dispatch(scrollFunc({ id, time }))

    }

    // vertical menu
    const menuClick2 = (id, time, e) => {
        e.preventDefault();              
        dispatch(scrollFunc({ id, time })) // truyền nhiều params cho action.payload thì bỏ vào trong 1 obj
    }


    //hover
    
   
    

   


    return (
        <div>
            
            <div className="menu1 menux">
                <div className="nav-btn-container">
                    <div className="nav-btn"></div>
                </div>
                <ul>
                    {menus.map((menu,i) => {
                        return (
                            <li key={menu.id}
                            className={`list${i} list`}
                                onClick={(e) => menuClick1(menu.id, 1.5, e)}
                               // onMouseOver={()=>hoverMenu(i)}
                                //onMouseOut={unhoverMenu.bind(this,menu.id)}
                            >
                                {menu.title}
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="menu2 menux">
                
                <ul>
                    {menus.map((menu,i) => {
                        return (
                            <li key={menu.id} onClick={menuClick2.bind(this, menu.id, 0) } className={`left${i}`}>
                                {menu.title}
                                </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Menu
