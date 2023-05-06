import { actions } from '@gdi/store-base';
import { initSkyBox } from 'isokit';
import { delay, put, takeEvery } from '../../../helpers';

export let scene: any, task: any;

type ActionSpeech = {
  type: 'BABYLON_LOADED';
  scene: any;
  debugBabylon?: boolean;
};

export function* sceneLoaded(action: ActionSpeech) {
  yield delay(1000);

  scene = action.scene;

  scene.setActiveCameraById(scene.cameras[0].id);
  scene.activeCamera.attachControl(scene.getEngine().getRenderingCanvas());

  initSkyBox('http://localhost:3001/scenes/b');
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
}

export function* root() {
  yield takeEvery('SIXTY_LOADED', sceneLoaded);
}
