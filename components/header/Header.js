'use client'
import React from 'react'
import Navs from './Navs'
import Logo from '../Logo'


export default function Header() {
    return (
        <div className="container flex gap-3 items-center md:flex-row flex-col w-full px-5 md:px-20 py-8 bg-black">
            <Logo />
            <Navs />
            <button className="py-4 px-7 text-2xl font-light text-white uppercase rounded-xl bg-gradient-to-r from-[#12BF56] to-[#22E0F3]">login/signup</button>
        </div>
    )
}
