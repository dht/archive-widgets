import { EditorSchema, prompt } from '@gdi/ui';
import { takeEvery } from '../../../helpers';
import { customEvenChannel } from './channels/channel.customEvent';
import { actions, selectors, useDispatch, useSelector } from '@gdi/store-base';
import { call, put } from 'saga-ts';
import { getPromptPlaceholder } from './_utils/nodes';

export function* flow(action: any) {
  const { data } = action;

  const { value, didCancel } = yield prompt.custom({
    title: 'Node Definition',
    component: EditorSchema,
    componentProps: {
      value: JSON.stringify(data?.data ?? {}, null, 2),
      width: 800,
      height: 500,
      actions: ['content_copy', 'download', 'code'],
      schemaId: 'INode',
    },
  });
}

export function* bootstrap(action: any) {
  const { nodes } = action;

  yield put(actions.nodes.setAll(nodes));

  const placeholder = yield* call(getPromptPlaceholder, nodes);

  yield put(
    actions.appState.patch({
      promptPlaceholder: placeholder,
    })
  );
}

export function* root() {
  const channel = customEvenChannel('flow');
  yield takeEvery(channel, flow);

  yield takeEvery('BOOTSTRAP_FLOW', bootstrap);
}
