import { ItemEventParams } from '../contextMenu.types';
declare const useBondEdit: () => readonly [({ props }: ItemEventParams) => Promise<void>, ({ props }: ItemEventParams) => boolean];
export default useBondEdit;
