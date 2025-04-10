import { BondsContextMenuProps, ItemEventParams } from '../contextMenu.types';
declare type Params = ItemEventParams<BondsContextMenuProps>;
declare const useBondSGroupAttach: () => readonly [({ props }: Params) => void, ({ props }: Params) => boolean];
export default useBondSGroupAttach;
