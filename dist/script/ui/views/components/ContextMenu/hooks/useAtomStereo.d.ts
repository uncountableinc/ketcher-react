import { ItemEventParams } from '../contextMenu.types';
declare const useAtomStereo: () => readonly [({ props }: ItemEventParams) => Promise<void>, ({ props }: ItemEventParams) => boolean];
export default useAtomStereo;
