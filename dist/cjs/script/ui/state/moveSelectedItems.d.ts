import { Editor } from 'ketcher-core';
declare type ArrowKey = 'ArrowUp' | 'ArrowDown' | 'ArrowRight' | 'ArrowLeft';
export declare function isArrowKey(key: string): key is ArrowKey;
export declare function moveSelectedItems(editor: Editor, key: ArrowKey, isShiftPressed: boolean): void;
export {};
