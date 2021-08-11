import { gsap } from 'gsap';
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { rightDisAppearMobile,navHide,changeFlag1, rightDisAppear,flagSelector, menuSelector, navBarDisappear, navBtn, rightAppear, rightAppearMobile, scrollFunc, toggleFlag } from '../features/myweb/contentSlice';
import useMedia from '../hooks/useMedia';
const Menu = () => {

    //register gsap plugin
    gsap.registerPlugin(ScrollToPlugin);
    gsap.registerPlugin(CSSRulePlugin);
    // dispatch
    const dispatch = useDispatch()
    // selector móc state menu trong slice ra
    const menus = useSelector(menuSelector)
    const flag = useSelector(flagSelector)
//mediaquery
const {xxs,xs,sm,md,xsMin,smMin,mdMin} = useMedia()

    // event functions

    const menuClick1 = (id, time, e) => {
                     
      //  dispatch(changeFlag1())
        
        dispatch(scrollFunc({ id, time }))
       dispatch(rightAppear())
    
    }

    // vertical menu
    const menuClick2 = (id, time, e) => {
                     
        dispatch(scrollFunc({ id, time })) // truyền nhiều params cho action.payload thì bỏ vào trong 1 obj
       //dispatch(rightDisAppear())

       if (xs) {
        dispatch(scrollFunc({ id, time }))
        dispatch(rightAppearMobile())
        dispatch(navHide())
        dispatch(toggleFlag())

       }
    }

    const reverse= ( )=>{
        
        if(xs){
            dispatch(rightDisAppearMobile())
            dispatch(toggleFlag())
        } else{
            dispatch(rightDisAppear())
        }
        
    }
    const menuClickMobile = (id, time, e) => {
        e.preventDefault();  
        dispatch(toggleFlag())
       
        dispatch(navBarDisappear())

        dispatch(rightAppearMobile())
        dispatch(scrollFunc({ id, time })) // truyền nhiều params cho action.payload thì bỏ vào trong 1 obj
    }


    //hover
    
   
    const navClick=()=>{
        dispatch(toggleFlag())
        if(flag) {
            dispatch(navBtn())
        } else {
            gsap.to('.menu3',.3,{marginLeft:'-100%'})
        }
        
    }

   


    return (
        <div>
            
            <div className="menu1 menux">
                <div className="nav-btn-container" onClick={navClick}>
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
                    <li onClick={reverse}>My Intro</li>
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
