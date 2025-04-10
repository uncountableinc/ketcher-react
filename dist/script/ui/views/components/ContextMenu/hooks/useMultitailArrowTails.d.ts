import { ItemEventParams, MultitailArrowContextMenuProps } from '../contextMenu.types';
declare type Params = ItemEventParams<MultitailArrowContextMenuProps>;
export declare const useMultitailArrowTailsAdd: () => {
    addTail: ({ props }: Params) => void;
    isAddTailDisabled: ({ props }: Params) => boolean;
};
export declare const useMultitailArrowTailsRemove: () => {
    removeTail: ({ props }: Params) => void;
    removeTailHidden: ({ props }: Params) => boolean;
};
export {};
