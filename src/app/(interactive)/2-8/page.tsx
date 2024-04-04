"use client"

import React from 'react'
import GameBar from '~/components/GameBar'
export default function page() {
  return (
    <div>
        <div className='h-[100px]'></div>
        <div className="text-white flex items-center text-center justify-center">
            <p>LEVEL<br/>1/3</p>
        </div>
        <div className='flex justify-center mt-[480px]'>
            <GameBar/>
        </div>

    </div>
  )
}