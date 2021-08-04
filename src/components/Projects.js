import { Back, gsap } from 'gsap'
import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { projectSelector } from '../features/myweb/contentSlice'
const Projects = () => {
    //móc projects trong redux ra bằng selector
    let projects = useSelector(projectSelector)


    // function hover
    const hoverOn = (id) => {

        act[id].play()
    }

    const hoverOff = (id) => {
        act[id].reverse()

    }

    const act = []
    // gsap

    useEffect(()=>{
        gsap.set('.wrap, .wrap0,.wrap1 ', { perspective: 1000 });
        gsap.set('.inner,.inner0, .inner1', { transformStyle: "preserve-3d" });
        gsap.set('.back', { rotationX: -90 });
        gsap.set(['.back', '.front'], { backfaceVisibility: "hidden", transformOrigin: '50% 0' });
       
        projects.map((project, i) => {
            let tl = gsap.timeline({ paused: true });
    
            let t = tl
                .set(`.wraper${i}`, { willChange: "transform" })
                .to(`.inner${i}`, 0.7, { y: "-90px", rotationX: 90, z: 0.01, zIndex: 2, overwrite: "all", ease: Back.easeOut }, 0);
            act.push(t)
            return act
        })
    },[])
     

    // mỗi wraper sẽ có 1 bộ timline, variable t riêng dùng .map để tạo. push vào trong array act[]
    
    //console.log(act);


    return (

        <section className="projects section-container">
            <h2 className="title">Projects</h2>
            <div className="container">
                
                <div className="projects__items">
                    {projects.map((project, i) => {


                        return (
                            <div className={`wraper wraper${i}`}
                                onMouseOver={() => hoverOn(i)}  // for hover effect must use arrow function otherwise it just render one time when mounted
                                onMouseOut={() => hoverOff(i)}

                                key={project.id}
                            >
                                <div className={`wrap wrap${i}`}>

                                    <div className={`inner${i} inner`}>
                                        <div className={`face front front${i}`} >
                                            <img
                                                className={project.isHover ? " imghover" : ""}

                                                src={project.img} alt="" /></div>
                                        <div className={`face back back${i}`} >
                                            <h3>{project.title}</h3>
                                            <p>{project.content}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>






        </section>

    )
}

export default Projects
