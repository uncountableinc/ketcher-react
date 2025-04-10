import { ItemEventParams, RGroupAttachmentPointContextMenuProps } from '../contextMenu.types';
declare type Params = ItemEventParams<RGroupAttachmentPointContextMenuProps>;
declare const useRGroupAttachmentPointEdit: () => readonly [({ props }: Params) => void, ({ props }: Params) => boolean, ({ props }: Params) => boolean];
export default useRGroupAttachmentPointEdit;
