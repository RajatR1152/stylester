import React from 'react'
import CardLeft from './CardLeft'
import CardRight from './CardRight'

export default function Featured() {
    return (
        <div className="container w-full p-14 flex flex-col gap-32">
            <CardLeft />
            <CardRight />
            <CardLeft />
            <CardRight />
        </div>
    )
}
