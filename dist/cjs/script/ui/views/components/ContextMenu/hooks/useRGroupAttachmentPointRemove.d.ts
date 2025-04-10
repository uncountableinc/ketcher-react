import { ItemEventParams, RGroupAttachmentPointContextMenuProps } from '../contextMenu.types';
declare type Params = ItemEventParams<RGroupAttachmentPointContextMenuProps>;
declare const useDelete: () => ({ props }: Params) => Promise<void>;
export default useDelete;
