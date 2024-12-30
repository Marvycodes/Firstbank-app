import {useRef, useEffect} from 'react'
import './Transition.css'
import {Power4} from 'gsap'
function Transition({timeline}) {
    const trans = useRef(null);
    useEffect(() => {
       
        timeline.to(trans.current, {
            duration: 2,
            x: 2000,
            ease: Power4.easeOut
        });
        timeline.to(trans.current, {
            duration: 3,
            x: -2500,
            ease: Power4.easeOut
        });
    })
    return (
        <div>
           <div className="transition-effect" ref={trans}></div> 
        </div>
    )
}

export default Transition