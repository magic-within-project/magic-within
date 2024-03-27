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
        setBgImgSrc(backgroundMapConfig[page].image);
        break;
    }
  }, [page, router]);

  const imagePreloadSrc = useMemo(() => {
    const imagePreloadSrc = backgroundMapConfig[page].imagePreload;
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
