import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import {gsap} from 'gsap'


const contentSlice =createSlice({
    name:'content',
    initialState:{
        projects:[
            {
                id: nanoid(),               
                //title: 'project 1',
                img: '/images/Wooder.JPG',
                title: 'Wooder landing page',
                content:'This is my very first front-end product landing page when I started learning and working with CFD',
                isHover: false,
            },
            {
                id: nanoid(),               
                // title: 'project 2',
                 img: '/images/Gbox.JPG',
                 title: 'Gbox- clone website',
                 content:' This is one of website projects when I practiced using HTML,SASS, Javscript to build a simple website',
                 isHover: false,
 
             }
            
        ],
        menu: [
            {
                id: nanoid(),
                isHover: false,
                title: 'About',
                class: 'about'
            },
            {
                id: nanoid(),
                isHover: false,
                title: 'Skills',
                class: 'skills'

            },
            {
                id: nanoid(),
                isHover: false,
                title: 'Projects',
                class: 'projects'

            },
            {
                id: nanoid(),
                isHover: false,
                title: 'Education',
                class: 'edu'

            },
            {
                id: nanoid(),
                isHover: false,
                title: 'Experience',
                class: 'exp'

            },
        ],
        flag: false,
        edus:[
            {
                id: nanoid(),
                year: 2016,
                uni: 'University of Wollongong (UOW)',
                degree: 'Master of Professional Telecommunication Engineering'
            },
            {
                id: nanoid(),
                year: 2013,
                uni: 'BACHKHOA University (BKU)',
                degree: 'Barchelor of Electronic and Telecommunication Engineering'
            }
        ],
        exps:[
            {
                id: 11,
                time1: 'September 2019',
                time2:'Present',
                company: 'Teresa Tran & Associates',
                position: 'Telecommunication Support Engineer',
                task: 'During the time working for this small business, I enhanced my ability to install and work with both computer’s hardware and software (Xero, MYOB) for our working system. I also obtained “can do” proactive attitude and improved my troubleshooting skills by successfully setup CCTV system for internal and external security for office first time by myself. In addition, my communication skills also excelled thank for working in this professional environment.'
    
            },
            {
                id: 12,
                time1: 'November 2020',
                time2:'Present',
                company: 'CFD Front End Training Vietnam',
                position: 'Front End Develop Freelancer & Assistant',
                task: 'After acquainted myself with HTML, CSS, JavaScript, this is the first web develop agency in my career. This start-up agency facilitated both working and studying environment for me to cumulate practical experience and dig deeper into this field. I’ve learned to be proficient in a fast-paced work environment. Currently, I am improving my ability to use Reactjs and Vuejs frameworks for web development here.'
            },
            {
                id: 13,
                time1: 'January 2019',
                time2:'August 2019',
                company: 'CITA Services Pty Ltd',
                position: 'Telecommunication Technician (level4)',
                task: 'Being the first place where I gained my professional working experience in Australia. Being alone at sites for installing and maintaining gave me a hand to improve my self-discipline and ability to work alone. In addition, working as an technician assisted me to acquire more technical skills for both software and hardware (install hardware and configure new telecommunication system for telecom towers and shelters)'
            }
        ]
    },
    reducers:{
        changeFlag1: (state) => {
            state.flag = true
        },

        // projects hover
        projectHoverOn: (state, action) => {
            const Id = action.payload
            state.projects = state.projects.map(project => {
                if (project.id === Id) project.isHover = true
                return project

            })
        },
        projectHoverOff: (state, action) => {
            const Id = action.payload
            state.projects = state.projects.map(project => {
                if (project.id === Id) project.isHover = false
                return project

            })
        },

        // menu hover
        menuHoverOn: (state, action) => {
            const Id = action.payload
            state.menu = state.menu.map(menu => {
                if (menu.id === Id) menu.isHover = true
                return menu

            })
        },
        menuHoverOff: (state, action) => {
            const Id = action.payload
            state.menu = state.menu.map(menu => {
                if (menu.id === Id) menu.isHover = false
                return menu

            })
        },
        rightAppear: () => {
            gsap.to('.App',{overflow:'unset'})
            gsap.to('.menu1',1,{marginLeft:'-100%'})
            gsap.to('.intro',1,{marginTop:'-100%'})
            gsap.to('.des',.5,{opacity:0})
            
            gsap.to('.ava-corner',1,{delay:1,marginTop:'5%'})
            
            const tl =gsap.timeline() 
           tl
           .to('.main',1,{marginLeft:'15%'})
            .to('.menu2',1,{marginLeft:'2%',delay:0.5,opacity:1})
            
           


        },
        rightAppearMobile: () => {
            gsap.to('.App',{overflow:'unset'})
           // gsap.to('.menu1',1,{marginLeft:'-100%'})
            gsap.to('.intro',1,{marginTop:'-100%'})
            gsap.to('.des',.5,{opacity:0})
            
            //gsap.to('.ava-corner',1,{delay:1,marginTop:'5%'})
            
            const tl =gsap.timeline() 
           tl
           .to('.main',1,{marginLeft:'0%'})
            .to('.menu2',1,{marginLeft:'2%',delay:0.5,opacity:1})
            
           


        },
        
        scrollFunc: (state, action) => {
            let name = []
            const { id, time } = action.payload
            // console.log('id is ' +Id);
            //const time = 1.5 
            // console.log( time);

            // const Id = action.payload
            name = state.menu.map(menu => {
                if (id === menu.id) 
                return menu.class
            })
            name.map(name => {
                if (name !== undefined)
                    gsap.to(window, { duration: 2, scrollTo: { y: `.${name}`, offsetY: 50 }, delay: `${time}` })
            })


        }
    }
})

//====REDUCER===
const contentReducer = contentSlice.reducer

//=========SELECTORS
export const flagSelector = state => state.contentReducer.flag
export const projectSelector = state => state.contentReducer.projects
export const menuSelector = state => state.contentReducer.menu
export const menuFlagSelector = state => state.contentReducer.menuFlag
export const eduSelector =state => state.contentReducer.edus
export const expSelector =state =>state.contentReducer.exps
//===== Export Actions
export const{
    changeFlag1,
    projectHoverOn,
    projectHoverOff,
    rightAppear,
    scrollFunc,
    menuHoverOn,
    menuHoverOff,
    rightAppearMobile
}= contentSlice.actions

//=====EXPORT REDUCER
export default contentReducer