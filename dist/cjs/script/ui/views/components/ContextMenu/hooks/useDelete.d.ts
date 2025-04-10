import { ItemEventParams, SelectionContextMenuProps } from '../contextMenu.types';
declare type Params = ItemEventParams<SelectionContextMenuProps>;
declare const useDelete: () => ({ props }: Params) => Promise<void>;
export default useDelete;
