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
  "0-8": {
    soundEffect: {
      sound: "/sound/effect/magical.mp3",
    },
  },
  "1-1": {
    soundEffect: {
      sound: "/sound/effect/crowd-talking.mp3",
      loop: true,
    },
  },
  "1-5": {
    soundEffect: {
      sound: "/sound/effect/crowd-talking.mp3",
      loop: true,
    },
  },
  "1-6": {
    soundEffect: {
      sound: "/sound/effect/crowd-talking.mp3",
      loop: true,
    },
  },
  "1-7": {
    soundEffect: {
      sound: "/sound/effect/school-alarm.mp3",
      volume: 1,
    },
    backgroundVolume: 0.2,
  },
  "1-9": {
    soundEffect: {
      sound: "/sound/effect/magic-wand.mp3",
      volume: 1,
    },
    backgroundVolume: 0.2,
  },
  "2-11": {
    soundEffect: {
      sound: "/sound/effect/glitter-shot.mp3",
      volume: 1,
    },
  },
  "2-12": {
    soundEffect: {
      sound: "/sound/effect/glitter-shot.mp3",
      volume: 1,
    },
  },
  "2-13": {
    soundEffect: {
      sound: "/sound/effect/glitter-shot.mp3",
      volume: 1,
    },
  },
  "4-1": {
    soundEffect: {
      sound: "/sound/effect/magical.mp3",
      volume: 1,
    },
  },
  "6-10": {
    soundEffect: {
      sound: "/sound/effect/magic-wand.mp3",
      volume: 1,
    },
  },
};
