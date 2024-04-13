"use client";

import { Volume2, VolumeX } from "lucide-react";
import { usePathname } from "next/navigation";
import { useSoundStore } from "~/store/sound";

type Props = {};

const SoundToggle = (props: Props) => {
  const { toggle, isPlaying } = useSoundStore();
  const path = usePathname();
  const page = path.split("/")[1] as string;
  const scene = page.split("-")[0];
  if (scene !== "7")
    return (
      <button
        onClick={toggle}
        className="text-accent h-auto w-auto rounded-[8px] p-2 hover:bg-black/20"
      >
        {isPlaying ? (
          <Volume2 className="h-5 w-5" />
        ) : (
          <VolumeX className="h-5 w-5" />
        )}
      </button>
    );
};

export default SoundToggle;
