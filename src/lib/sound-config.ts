export const scenePageMap = {
  "1": "/sound/track/magical-fantasy.mp3",
  "2": "/sound/track/folk-medieval.mp3",
  "3": "/sound/track/illusions.mp3",
  "4": "/sound/track/illusions.mp3",
  "5": "/sound/track/instructions-for-living.mp3",
  "6": "/sound/track/purpose.mp3",
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
