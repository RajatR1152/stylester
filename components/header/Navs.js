'use client'
import Link from 'next/link'
import React from 'react'

export default function Navs() {
    return (
        <div className="container w-fit md:my-0 my-5 mx-auto gap-10 flex md:flex-row flex-col">
            <Link className='text-2xl font-anton font-extrabold capitalize' href={'/'}>home</Link>
            <Link className='text-2xl font-anton font-extrabold capitalize' href={'/'}>about </Link>
            <Link className='text-2xl font-anton font-extrabold capitalize' href={'/'}>check our designs</Link>
            <Link className='text-2xl font-anton font-extrabold capitalize' href={'/'}>contact us</Link>
        </div>
    )
}
