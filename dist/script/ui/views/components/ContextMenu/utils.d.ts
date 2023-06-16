/**
 * Remove the word `bond` out of the title
 *
 * @example
 * formatTitle('Single Bond') === 'Single'
 */
export declare const formatTitle: (title: string) => string;
/**
 * Get bond names from default export of `src/script/ui/action/tools.js`
 *
 * @returns `['bond-single', 'bond-up', 'bond-down', 'bond-updown', 'bond-double',
 * 'bond-crossed', 'bond-triple', 'bond-aromatic', 'bond-any', 'bond-hydrogen',
 * 'bond-singledouble', 'bond-singlearomatic', 'bond-doublearomatic', 'bond-dative']`
 */
export declare const getBondNames: (tools: any) => string[];
export declare const queryBondNames: string[];
/**
 * Get bond names except for query bonds
 *
 * @returns `['bond-single', 'bond-up', 'bond-down', 'bond-updown', 'bond-double',
 * 'bond-crossed', 'bond-triple', 'bond-aromatic', 'bond-hydrogen', 'bond-dative']`
 */
export declare const getNonQueryBondNames: (tools: any) => string[];
export declare const noOperation: () => null;
export declare function onlyHasProperty<T extends object>(checkedObject: T, key: keyof T, ignoredProps?: string[]): boolean;
