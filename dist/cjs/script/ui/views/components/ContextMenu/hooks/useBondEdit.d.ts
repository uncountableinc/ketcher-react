import { BondsContextMenuProps, ItemEventParams } from '../contextMenu.types';
declare type Params = ItemEventParams<BondsContextMenuProps>;
declare const useBondEdit: () => readonly [({ props }: Params) => Promise<void>, ({ props }: Params) => boolean];
export default useBondEdit;
