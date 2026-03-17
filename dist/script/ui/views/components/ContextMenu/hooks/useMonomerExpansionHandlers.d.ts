import { FunctionalGroup } from 'ketcher-core';
import { ItemEventParams, MacromoleculeContextMenuProps } from '../contextMenu.types';
declare type Params = ItemEventParams<MacromoleculeContextMenuProps>;
export declare const canExpandMonomer: (functionalGroup: FunctionalGroup) => boolean;
declare const useMonomerExpansionHandlers: () => readonly [({ props }: Params, toExpand: boolean) => void, ({ props }: Params, toExpand: boolean) => boolean];
export default useMonomerExpansionHandlers;
