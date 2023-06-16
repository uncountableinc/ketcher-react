import { Struct } from 'ketcher-core';
declare type Items = {
    atoms?: number[];
    bonds?: number[];
};
declare function getGroupIdsFromItemArrays(struct: Struct, items?: Items): number[];
declare type MergeItems = {
    atoms: Map<number, number>;
    bonds: Map<number, number>;
};
declare function getGroupIdsFromItemMaps(struct: Struct, mergeMaps: MergeItems | null): number[];
export { getGroupIdsFromItemArrays, getGroupIdsFromItemMaps };
