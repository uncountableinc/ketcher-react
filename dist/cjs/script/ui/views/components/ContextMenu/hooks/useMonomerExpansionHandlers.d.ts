import { ItemEventParams, MacromoleculeContextMenuProps } from '../contextMenu.types';
declare type Params = ItemEventParams<MacromoleculeContextMenuProps>;
declare const useMonomerExpansionHandlers: () => readonly [({ props }: Params, toExpand: boolean) => void, ({ props }: Params, toExpand: boolean) => boolean];
export default useMonomerExpansionHandlers;
