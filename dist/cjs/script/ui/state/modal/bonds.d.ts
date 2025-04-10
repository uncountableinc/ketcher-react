import { Bond } from 'ketcher-core';
export declare function updateSelectedBonds({ bonds, changeBondPromise, editor, }: {
    bonds: number[];
    changeBondPromise: Promise<Bond>;
    editor: any;
}): void;
