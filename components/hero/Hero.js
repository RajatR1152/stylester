import React from 'react'
import HeroDiv from './HeroDiv'

export default function Hero() {
    return (
        <div className="container mt-20 w-full h-fit p-12">
            <h1 className="text-3xl md:text-8xl font-bold uppercase text-center font-meri">meet mr.styler <br /> he will design for you!</h1>
            <img src="https://firebasestorage.googleapis.com/v0/b/nextagram-fd2fa.appspot.com/o/posts%2FScreenshot%202024-02-09%20175757.png?alt=media&token=4b6215ee-ecfc-41a4-933f-25e3120a502e" alt="" className="w-auto mx-auto -mt-10 h-screen" />
            <HeroDiv />
        </div>
    )
}
