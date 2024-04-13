"use client";

import { backgroundMapConfig } from "../lib/bg-config";
import { useEffect, useMemo, useState } from "react";
import AnimatedImage from "./animated-image";
import { usePathname, useRouter } from "next/navigation";

const InteractiveBackground = () => {
  const path = usePathname();
  const router = useRouter();
  const page = path.split("/")[1] as keyof typeof backgroundMapConfig;
  const [bgImgSrc, setBgImgSrc] = useState<string>();

  useEffect(() => {
    switch (page) {
      default:
        setBgImgSrc(
          backgroundMapConfig[page]
            ? backgroundMapConfig[page].image
            : undefined,
        );
        break;
      case "6-19" :
        backgroundMapConfig[page].image.forEach((image, index) => {
          setTimeout(() => {
            setBgImgSrc(image);
          }, index * backgroundMapConfig[page].stopMotionDuration);
        });
        break;
      case "6-25":
        backgroundMapConfig[page].image.forEach((image, index) => {
          setTimeout(() => {
            setBgImgSrc(image);
            if (index === backgroundMapConfig[page].image.length - 1) {
              setTimeout(() => {
                router.push("6-26");
              }, backgroundMapConfig[page].stopMotionDuration / 2);
            }
          }, index * backgroundMapConfig[page].stopMotionDuration);
        });
        break;
    }
  }, [page, router]);

  const imagePreloadSrc = useMemo(() => {
    if (!backgroundMapConfig[page]) return [] as [];
    const imagePreloadSrc = backgroundMapConfig[page].imagePreload || [];
    return imagePreloadSrc;
  }, [page]);

  return (
    <>
      {bgImgSrc && (
        <AnimatedImage
          src={bgImgSrc}
          preloadSrcs={imagePreloadSrc}
          alt="background-image"
          loading="eager"
          fill
          className="relative -z-50 object-cover"
        />
      )}
    </>
  );
};

export default InteractiveBackground;
