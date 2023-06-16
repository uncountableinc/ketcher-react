import { ItemEventParams } from '../contextMenu.types';
/**
 * Fullname: useFunctionalGroupExpandOrContract
 */
declare const useFunctionalGroupEoc: () => readonly [({ props }: ItemEventParams, toExpand: boolean) => void, ({ props }: ItemEventParams, toExpand: boolean) => boolean, ({ props }: ItemEventParams) => boolean];
export default useFunctionalGroupEoc;
