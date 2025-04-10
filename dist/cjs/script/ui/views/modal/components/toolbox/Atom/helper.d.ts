import { AtomType } from 'ketcher-core';
export declare function atomValid(label: string, isMultipleAtoms: boolean, atomType: AtomType, isCustomQuery: boolean): boolean | "";
export declare function AtomListValid(value: string, atomType: AtomType, isCustomQuery: boolean): boolean;
export declare function pseudoAtomValid(value: string, atomType: AtomType, isCustomQuery: boolean, disableQueryElements?: string[] | null): boolean | "";
export declare function chargeValid(charge: any, isMultipleAtoms: boolean, isCustomQuery: boolean): boolean | null;
export declare function customQueryValid(value: string, isCustomQuery: boolean): boolean;
