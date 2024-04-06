'use client'
import React from "react";
import { useState } from "react";
import styled, { css, keyframes } from "styled-components";

export default function Page() {
  const [currentButton, setCurrentButton] = useState("เริ่ม");
  const [isAnimationStopped, setIsAnimationStopped] = useState(true);
  const [currentPosition, setCurrentPosition] = useState(0);
  const barWidth = 320;

  const moveDivAnimation = keyframes`
    0% { left: 0px; top: 0px; }
    100% { left: ${barWidth}px; top: 0px; }
  `;

  const AnimatedDiv = styled.div`
    width: 4px;
    height: 200%;
    background-color: #ffba5a;
    animation: ${isAnimationStopped
      ? "none"
      : css`
          ${moveDivAnimation} 1s linear infinite alternate
        `};
    transform: translateY(-25%);
    left: ${currentPosition}px;
  `;

  function handleSubmit() {
    setIsAnimationStopped(!isAnimationStopped);
    if (isAnimationStopped) {
      setCurrentButton("หยุด");
      return;
    }
    setCurrentButton("เริ่ม")
    
    const position = getCurrentPosition();
    setCurrentPosition(position);
    const redDiv: any = document.getElementById("red");
    const redDivRect = redDiv.getBoundingClientRect();
    const origin = document.getElementById("arrow-game-bar")?.getBoundingClientRect()?.left ?? 0;
    if (position + origin >= redDivRect.left && position + origin <= redDivRect.right) {
      alert("congrats!");
    } else alert("skill issue")
  }

  function getCurrentPosition() {
    const animatedDiv = document.getElementById("animated-div");
    if (animatedDiv) {
      const computedStyle = window.getComputedStyle(animatedDiv);
      return parseFloat(computedStyle.left);
    }
    return 0;
  }

  return (
    <div>
      <div className="h-[100px]"></div>
      <div className="flex items-center justify-center text-center text-white">
        <p>
          LEVEL
          <br />1 / 3
        </p>
      </div>
      <div className="mt-[480px] flex justify-center">
        <div>
          <div
            className="relative h-5 rounded-xl border-2 border-white bg-[#D3D5EC]"
            style={{ width: barWidth }}
          >
            <div id="arrow-game-bar" className="absolute inset-y-0 left-0 right-0 flex items-center justify-center">
              <div
                id="red"
                className="h-full w-[79px] rounded-xl bg-[#D60000]"
              ></div>
            </div>
            <AnimatedDiv
              id="animated-div"
              className="absolute left-0 top-0"
            ></AnimatedDiv>
          </div>
          <div className="mt-10 flex items-center justify-center">
            <button
              onClick={() => handleSubmit()}
              className="rounded-lg bg-[#FF9F19] pb-2 pl-5 pr-5 pt-2 text-white"
            >
              {currentButton}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
