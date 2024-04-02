"use client"

import React, { useEffect, useState } from 'react'
import GameBar from '~/components/GameBar'
export default function page() {
    // const [dist, setDist] = useState(0)
    // const [forward, setForward] = useState(true)

    // useEffect(() =>{
    //     if (forward) setDist(dist + 1)
    //     // else setDist(dist - 1)
    //     if (dist == 9999) setForward(false)
    //     if (dist == 1) setForward(true)
    // }, [dist])
  return (
    <div>
        <div className='h-[100px]'></div>
        <div className="text-white flex items-center text-center justify-center">
            <p>LEVEL<br/>1/3</p>
        </div>
        <div className='flex justify-center mt-[480px]'>
            <GameBar/>
        </div>
        {/* <div className='bg-white w-50'>
            {dist}
        </div> */}
    </div>
  )
}