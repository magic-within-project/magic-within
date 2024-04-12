import React from 'react';
import styled, { keyframes } from 'styled-components';

export default function GameBar() {
  const barWidth = 320;

  const moveDivAnimation = keyframes`
    0% { left: 0px; top: 0px; }
    100% { left: ${barWidth}px; top: 0px; }
  `;
  const AnimatedDiv = styled.div`
    width: 4px;
    height: 200%;
    background-color: #FFBA5A;
    animation: ${moveDivAnimation} 1s linear infinite alternate;
    transform: translateY(-25%);
  `;

  return (
    <div>
    <div className="relative h-5 rounded-xl bg-[#D3D5EC] border-2 border-white" style={{ width: barWidth }}>
        <div className='absolute inset-y-0 left-0 right-0 flex justify-center items-center'>
          <div id="red" className='bg-[#D60000] w-[97px] h-full rounded-xl'></div>
        </div>
        <AnimatedDiv className="absolute top-0 left-0"></AnimatedDiv>
      </div>
      <div className='flex justify-center items-center mt-6'>
      <button className='rounded-lg bg-[#FF9F19] text-white pl-5 pr-5 pt-2 pb-2'>หยุด</button>
      </div>
    </div>
  );
}

