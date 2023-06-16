import { ItemEventParams } from '../contextMenu.types';
declare const useBondTypeChange: () => readonly [({ id, props }: ItemEventParams) => void, ({ props }: ItemEventParams) => boolean];
export default useBondTypeChange;
