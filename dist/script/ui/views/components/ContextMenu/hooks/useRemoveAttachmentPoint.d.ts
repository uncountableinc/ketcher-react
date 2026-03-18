import { AtomContextMenuProps, ItemEventParams } from '../contextMenu.types';
declare type Params = ItemEventParams<AtomContextMenuProps>;
declare const useRemoveAttachmentPoint: () => (({ props }: Params) => Promise<void>)[];
export default useRemoveAttachmentPoint;
