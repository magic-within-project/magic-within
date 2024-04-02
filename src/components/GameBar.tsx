import React from 'react';
import styled, { keyframes } from 'styled-components';

export default function GameBar() {
  const barWidth = 320;


  // Import the keyframes animation from global.css
  const moveDivAnimation = keyframes`
    0% { left: 0px; top: 0px; }
    100% { left: ${barWidth}px; top: 0px; }
  `;
  
  // Create a styled component with the animation applied
  const AnimatedDiv = styled.div`
    width: 4px;
    height: 200%;
    background-color: #FFBA5A;
    animation: ${moveDivAnimation} 1s linear infinite alternate;
    transform: translateY(-25%)
  `;

  return (
    <div className="relative h-8 bg-gray-200" style={{ width: barWidth }}>
      <div className='absolute inset-y-0 left-0 right-0 flex justify-center items-center'>
        <div className='bg-[#D60000] w-[97px] h-8'></div>
      </div>
      <AnimatedDiv className="absolute top-0 left-0"></AnimatedDiv>
    </div>
  );
}