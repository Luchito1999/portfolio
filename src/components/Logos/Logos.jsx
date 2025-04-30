import React from 'react'
import "./Logos.css"
import { useEffect, useRef } from 'react'
import VanillaTilt from 'vanilla-tilt'

import jsImage from '../../assets/js.svg'
import cssImage from '../../assets/css.png'
import reactfoto from '../../assets/react.png'


const logosData = [
    {
        title: "Web Developer",
        image: jsImage, // Usar la importación
    },
    {
        title: "Front-end",
        image: cssImage, // Usar la importación
    },
    {
        title: "React Developer",
        image: reactfoto, // Ya está bien aquí
    }
]

function Logos() {
    const tiltRef = useRef([])

    useEffect(() => {
        tiltRef.current.forEach(el => {
            if (el) {
                VanillaTilt.init(el, {
                    max: 16,
                    speed: 1000,
                    glare: true,
                    "max-glare": 0.3,
                })
            }
        })
    }, [])

    return (
        <section id="logos" className=" flex flex-col items-center justify-center">

            <div className="logos-container">
                {logosData.map((logos, i) => (
                    <div className="logo h-[20rem]" ref={el => tiltRef.current[i] = el} key={i}>
                        <img src={logos.image} alt={logos.title} className="logo-img" />
                        <h4>{logos.title}</h4>
                    </div>
                ))}
            </div>
        </section>
    )
}


export default Logos
