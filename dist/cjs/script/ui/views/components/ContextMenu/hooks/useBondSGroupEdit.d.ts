import { BondsContextMenuProps, ItemEventParams } from '../contextMenu.types';
declare type Params = ItemEventParams<BondsContextMenuProps>;
declare const useBondSGroupEdit: () => readonly [() => void, ({ props }: Params) => boolean, () => boolean];
export default useBondSGroupEdit;
