import React from 'react'

export default function Div3() {
    return (
        <div className="container mt-44 mb-14 w-full md:px-10 h-fit ">
            <div className="containe w-full bg-black flex px-10 overflow-hidden h-screen md:h-[1000px] ">
                <div className="container w-4/12 h-4/5 ab -ms-52 clear-both blur-3xl opacity-15 bg-slate-50 rounded-full"></div>
                <div className="container mx-auto w-5/12 h-4/5 mt-[20%] clear-both blur-3xl opacity-15 bg-slate-50 rounded-full"></div>
                <div className="container ms-auto -me-52  w-4/12 h-4/5 clear-both blur-3xl opacity-15 bg-slate-50 rounded-full"></div>
                <div className="container w-11/12 h-full z-10 p-5 absolute">
                    <span className="text-4xl md:text-9xl uppercase font-std font-semibold leading-snug">
                        Lorem ipsum <br /> sit amet consectetur <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-[#5aac7b] to-[#195cec]">adipisicing</h1> elit.
                    </span>
                </div>
            </div>
        </div>
    )
}
