export function fromElement(selem: any): any;
export function toElement(elem: any): any;
export function fromAtom(satom: any): {
    alias: any;
    label: any;
    charge: any;
    isotope: any;
    explicitValence: any;
    radical: any;
    invRet: any;
    exactChangeFlag: boolean;
    ringBondCount: any;
    substitutionCount: any;
    unsaturatedAtom: boolean;
    hCount: any;
    stereoParity: any;
};
export function toAtom(atom: any): any;
export function fromStereoLabel(stereoLabel: any): {
    type: null;
    orNumber?: undefined;
    andNumber?: undefined;
} | {
    type: any;
    orNumber: number;
    andNumber: number;
} | undefined;
export function toStereoLabel(stereoLabel: any): any;
export function fromBond(sbond: any): {
    type: string;
    topology: any;
    center: any;
};
export function toBond(bond: any): any;
export function toBondType(caption: any): any;
export function fromSgroup(ssgroup: any): any;
export function toSgroup(sgroup: any): {
    type: any;
    attrs: any;
};
