import { addListener } from 'shared-base';

export type PlayAudioResponse = {
  audio: HTMLAudioElement;
  duration: number;
};

let currentAudio: HTMLAudioElement;

export const stopAudio = () => {
  if (currentAudio) {
    currentAudio.pause();
  }
};

export const playAudio = (audioUrl: string, isAmbience?: boolean): Promise<PlayAudioResponse> => {
  return new Promise((resolve) => {
    const audio = new Audio(audioUrl);
    currentAudio = audio;

    if (isAmbience) {
      audio.loop = true;
    }

    audio.addEventListener(
      'canplaythrough',
      function () {
        setTimeout(() => {
          let duration = audio.duration * 1000;

          // if infinity duration then set to 10 seconds

          if (duration === Infinity) {
            duration = 10000;
          }

          resolve({
            audio,
            duration,
          });
        }, 100);
      },
      false
    );
  });
};

const ambience: Record<string, HTMLAudioElement> = {};
let unListen: any;

export const playAmbience = (id: string, audioUrl: string, options: any) => {
  const { loop, callback, startTime = 0, stopTime, volume = 1 } = options;

  ambience[id] = new Audio(audioUrl);
  ambience[id].loop = loop === true;
  ambience[id].play();
  ambience[id].volume = volume;

  if (callback) {
    if (unListen) {
      unListen();
    }
    unListen = addListener('audio-seek', (data) => {
      ambience[id].currentTime = data.time;
    });
  }

  ambience[id].addEventListener('timeupdate', (ev: any) => {
    const currentTime = ev.target.currentTime;
    if (callback) {
      callback(currentTime);
    }

    if (stopTime && currentTime >= stopTime) {
      stopAmbience(id);
    }
  });

  ambience[id].currentTime = startTime;
};

export const stopAmbience = (audioUrl: string) => {
  if (ambience[audioUrl]) {
    ambience[audioUrl].pause();
  }
};
