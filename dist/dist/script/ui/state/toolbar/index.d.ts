export function initResize(): (dispatch: any, getState: any) => void;
export default function _default(state: {
    freqAtoms: never[];
    currentAtom: number;
    opened: null;
    visibleTools: {
        select: string;
    };
} | undefined, action: any): {
    freqAtoms: any;
    currentAtom: any;
    opened: null;
    visibleTools: {
        select: string;
    };
} | {
    opened: null;
    visibleTools: any;
    freqAtoms: never[];
    currentAtom: number;
} | {
    opened: any;
    freqAtoms: never[];
    currentAtom: number;
    visibleTools: {
        select: string;
    };
};
export function addAtoms(atomLabel: any): {
    type: string;
    data: any;
};
export function hiddenAncestor(el: any, base: any): any;
