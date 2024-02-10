import React from 'react'
import Logo from './Logo'
import { BiLogoInstagramAlt } from 'react-icons/bi'
import { BsTwitterX } from "react-icons/bs";
import Link from 'next/link';


export default function Footer() {
    return (
        <div className="containe w-10/12 mx-auto">

            <div className="containe w-full flex items-center">
                <Logo />
                <div className="containe w-fit ms-auto items-center p-5 flex gap-5">
                    <BiLogoInstagramAlt size={45} />
                    <BsTwitterX size={35} />
                </div>
            </div>

            <div className="containe flex flex-col gap-5 my-5 md:w-5/12 ms-auto py-5">
                <Link href={'/'} className='text-2xl capitalize '>about</Link>
                <Link href={'/'} className='text-2xl capitalize '>check our designs</Link>
                <Link href={'/'} className='text-2xl capitalize '>privacy policy</Link>
                <Link href={'/'} className='text-2xl capitalize '>returns and refunds</Link>
            </div>

            <div className="flex items-center container w-full py-24 p-5 justify-center">
                <p className="text-xl">copyright ©2023 Stylesterai</p>
            </div>

        </div>
    )
}
