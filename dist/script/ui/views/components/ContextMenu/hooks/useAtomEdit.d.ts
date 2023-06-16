import { ItemEventParams } from '../contextMenu.types';
declare const useAtomEdit: () => readonly [({ props }: ItemEventParams) => Promise<void>, ({ props }: ItemEventParams) => boolean];
export default useAtomEdit;
