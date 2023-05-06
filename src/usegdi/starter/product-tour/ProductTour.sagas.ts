import { actions, selectors } from '@gdi/store-base';
import { toast } from '@gdi/ui';
import { moveTorus } from 'isokit';
import { call, cancel, delay, fork, put, select, takeEvery, takeLatest } from '../../../helpers';
import { playAmbience, playAudio, stopAmbience, stopAudio } from './utils/audio';

let scene: any, task: any;

export function* startAnimation() {
  const transcript = yield* select(selectors.base.$transcriptForAnimation);

  yield call(playAmbience, 'modelz', 'http://localhost:3001/sounds/modelz.mp3');

  let index = 0;

  for (let item of transcript) {
    yield call(talk, item!, index);
    yield delay(500);
    index++;
  }

  yield delay(1000);

  toast.show("That's it folks!");

  yield call(wrapUp);
}

function* talk(item: Json, index: number) {
  const { sentence, audioUrl, characterId } = item;

  const response = yield* call(playAudio, audioUrl);

  yield put(
    actions.appState.patch({
      lineIndex: index,
    })
  );

  const { audio, duration } = response;

  audio.play();
}

type ActionSpeech = {
  type: 'BABYLON_LOADED';
  scene: any;
  debugBabylon?: boolean;
};

export function* sceneLoaded(action: ActionSpeech) {
  yield call(startAnimation);

  scene = action.scene;

  if (action.debugBabylon) {
    scene.debugLayer.show();
  }
}

type ActionPlay = {
  type: 'PLAY';
};

export function* wrapUp() {
  // yield call(stopAmbience, 'modelz');

  yield put(
    actions.appState.patch({
      flavour: 'default',
    })
  );

  yield put(
    actions.playback.patch({
      playbackStatus: 'idle',
      startTime: Date.now(),
    })
  );

  yield put(
    actions.camera.patch({
      radius: 25,
      alpha: 1,
      beta: 1,
      target: { x: 0, y: 0, z: 0 },
    })
  );
}

export function* play(action: ActionPlay) {
  toast.show('Starting playback');

  yield put(
    actions.appState.patch({
      flavour: 'outcome',
    })
  );

  yield put(
    actions.playback.patch({
      playbackStatus: 'playing',
      startTime: Date.now(),
    })
  );

  yield put(
    actions.camera.patch({
      radius: 6,
      alpha: 1,
      beta: 1,
      target: { x: -5, y: 1, z: 10 },
    })
  );
}

export function* start() {
  task = yield* fork(startAnimation);
}

export function* stop() {
  stopAudio();
  yield* cancel(task as any);
  yield fork(wrapUp);
}

export function* root() {
  yield takeEvery('PRODUCT_TOUR_LOADED', sceneLoaded);
  yield takeLatest('PLAY', start);
  yield takeLatest('PLAY', play);
  yield takeEvery('STOP', stop);
}
