import { AtomContextMenuProps, ItemEventParams } from '../contextMenu.types';
declare type Params = ItemEventParams<AtomContextMenuProps>;
declare const useAddAttachmentPoint: () => (({ props }: Params) => Promise<void>)[];
export default useAddAttachmentPoint;
