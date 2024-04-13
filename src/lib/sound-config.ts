export const scenePageMap = {
  "1": "/sound/track/magical-fantasy.mp3",
} as const;

export const soundPageMap: Record<
  string,
  {
    soundEffect?: {
      sound: string;
      loop?: boolean;
      volume?: number;
    };
    backgroundVolume?: number;
  }
> = {
  "2-1": {
    soundEffect: {
      sound: "/sound/sound-effect/scene-2-night-ambience.mp3",
    },
  },
  "4-9": {
    soundEffect: {
      sound: "/sound/sound-effect/scene-4-sliding-paper-seq.mp3",
      volume: 1,
    },
  },
};
