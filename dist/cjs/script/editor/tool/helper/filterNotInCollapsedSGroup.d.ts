import { Struct } from 'ketcher-core';
/**
 * return only such elements ids that not part of collapsed group
 * Addition: if an atom in the contracted SGroup,
 * but is an AttachmentPoint -> will be returned as well.
 */
export declare function filterNotInContractedSGroup(itemsToFilter: {
    atoms?: number[];
    bonds?: number[];
}, struct: Struct): {
    atoms: number[];
    bonds: number[];
};
export declare function filterNotPartOfSuperatomWithoutLabel(itemsToFilter: {
    atoms?: number[];
    bonds?: number[];
}, struct: Struct): {
    atoms: number[];
    bonds: number[];
};
