import { Editor, Vec2 } from 'ketcher-core';
export declare const createCopyOfSelected: (editor: Editor, point: Vec2) => {
    action: import("ketcher-core").Action;
    items: {
        atoms: number[];
        bonds: number[];
        rxnArrows: number[];
        rxnPluses: number[];
        texts: number[];
        images: number[];
        simpleObjects: number[];
        multitailArrows: number[];
    };
};
