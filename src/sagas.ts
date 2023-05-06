import { fork } from 'saga-ts';
import { root as rootBabylon } from './usegdi/starter/babylon/Babylon.sagas';
import { root as rootFlow } from './usegdi/starter/flow/Flow.sagas';
import { root as rootProductTour } from './usegdi/starter/product-tour/ProductTour.sagas';
import { root as rootSixty } from './usegdi/starter/sixty/Sixty.sagas';
import { root as rootTranscript } from './usegdi/starter/transcript/Transcript.sagas';

export function* root() {
  yield* fork(rootBabylon);
  yield* fork(rootFlow);
  yield* fork(rootProductTour);
  yield* fork(rootSixty);
  yield* fork(rootTranscript);
}
