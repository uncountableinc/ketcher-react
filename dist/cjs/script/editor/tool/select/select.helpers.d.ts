import { Atom, Bond } from 'ketcher-core';
import Editor from '../../Editor';
import LassoHelper from '../helper/lasso';
export declare function selMerge(selection: any, add: any, reversible: boolean): any;
export declare function getSelectedAtoms(selection: any, molecule: any): Atom[];
export declare function getSelectedBonds(selection: any, molecule: any): Bond[];
export declare function mapAtomIdsToAtoms(atomsIds: number[], molecule: any): Atom[];
export declare function mapBondIdsToBonds(bondsIds: number[], molecule: any): Bond[];
export declare function getNewSelectedItems(editor: Editor, selectedSgroups: number[]): Record<"atoms" | "bonds", number[]>;
export declare function selectElementsOnCanvas(elements: {
    atoms: number[];
    bonds: number[];
}, editor: Editor, lassoHelper: LassoHelper, event: PointerEvent): void;
export declare function onSelectionStart(event: PointerEvent, editor: Editor, lassoHelper: LassoHelper): void;
export declare function onSelectionMove(event: PointerEvent, editor: Editor, lassoHelper: LassoHelper): boolean;
export declare function onSelectionEnd(event: PointerEvent, editor: Editor, lassoHelper: LassoHelper): void;
export declare function onSelectionLeave(editor: Editor, lassoHelper: LassoHelper): void;
