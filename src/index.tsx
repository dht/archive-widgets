import type { IWidgets } from 'igrid';
import { starter } from './usegdi/starter/index';
export { root } from './sagas';

export const allWidgets: IWidgets = {
  ...starter,
};
