"use client";

import { Volume2, VolumeX } from "lucide-react";
import { useSoundStore } from "~/store/sound";

type Props = {};

const SoundToggle = (props: Props) => {
  const { toggle, isPlaying } = useSoundStore();
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
