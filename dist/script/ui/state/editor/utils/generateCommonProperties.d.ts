import { Atom, Bond } from 'ketcher-core';
declare type partialPropertiesOfElement = Partial<{
    [attribute in keyof (Atom | Bond)]: string | number | boolean;
}>;
export declare function generateCommonProperties(selectedElements: Atom[] | Bond[], normalizedElement: any): partialPropertiesOfElement;
export {};
