declare namespace _default {
    export { calcAngle };
    export { fracAngle };
    export { calcNewAtomPos };
    export { degrees };
    export { mergeBondsParams };
    export { getOnlyNonGroupItems };
    export { getNonGroupItemsAndAttachmentPoints };
}
export default _default;
declare function calcAngle(pos0: any, pos1: any): number;
import { fracAngle } from "ketcher-core/dist/application/editor";
declare function calcNewAtomPos(pos0: any, pos1: any, ctrlKey: any): Vec2;
declare function degrees(angle: any): number;
declare function mergeBondsParams(struct1: any, bond1: any, struct2: any, bond2: any): {
    merged: boolean;
    angle: number;
    scale: number;
    cross: boolean;
};
/**
 * Get all items IDs that do not belong to sgroups
 * @param items {{ atoms?: number[]; bonds?: number[] } | null}
 * @param struct {Struct}
 * @returns {{ atoms: number[], bonds: number[] }}
 */
declare function getOnlyNonGroupItems(items: {
    atoms?: number[] | undefined;
    bonds?: number[] | undefined;
} | null, struct: Struct): {
    atoms: number[];
    bonds: number[];
};
/**
 * Get all items IDs that do not belong to sgroups (except their attachment points)
 * @param items {{ atoms?: number[]; bonds?: number[] } | null}
 * @param struct {Struct}
 * @returns {{ atoms: number[], bonds: number[] }}
 */
declare function getNonGroupItemsAndAttachmentPoints(items: {
    atoms?: number[] | undefined;
    bonds?: number[] | undefined;
} | null, struct: Struct): {
    atoms: number[];
    bonds: number[];
};
import { Vec2 } from "ketcher-core/dist/domain/entities/vec2";
import { Struct } from "ketcher-core/dist/domain/entities/struct";
