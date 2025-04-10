import { FunctionalGroupsContextMenuProps, ItemEventParams } from '../contextMenu.types';
declare type Params = ItemEventParams<FunctionalGroupsContextMenuProps>;
/**
 * Fullname: useFunctionalGroupExpandOrContract
 */
declare const useFunctionalGroupEoc: () => readonly [({ props }: Params, toExpand: boolean) => void, ({ props }: Params, toExpand: boolean) => boolean];
export default useFunctionalGroupEoc;
