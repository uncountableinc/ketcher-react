import { AtomContextMenuProps, ItemEventParams } from '../contextMenu.types';
declare type Params = ItemEventParams<AtomContextMenuProps>;
declare const useAtomEdit: () => readonly [({ props }: Params) => Promise<void>, ({ props }: Params) => boolean];
export default useAtomEdit;
