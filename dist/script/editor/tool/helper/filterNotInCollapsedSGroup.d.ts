import { Struct } from 'ketcher-core';
/**
 * return only such elements ids that not part of collapsed group
 * Addition: if an atom in the collapsed SGroup, but is an AttachmentPoint it will be returned as well.
 */
export declare function filterNotInCollapsedSGroup(itemsToFilter: {
    atoms?: number[];
    bonds?: number[];
}, struct: Struct): {
    atoms: number[];
    bonds: number[];
};
