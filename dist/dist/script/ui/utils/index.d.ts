import { Option } from '../component/form/Select';
export declare function greekify(str: string): string;
export declare function filterLib(lib: any, filter: string): {};
export declare function filterFGLib(lib: any, filter: any): {};
export declare const getSelectOptionsFromSchema: (schema: any) => Array<Option>;
/**
 * Creates a function, which is not called if the current argument is the same as the last one
 * @param func function to be debounced
 * @param delay delay in ms
 * @param skipArguments indexes in arguments array to skip for comparison
 * @returns debounced function, which is not called with previous argument
 */
export declare function memoizedDebounce(func: any, delay?: number, skipArguments?: number[]): (...args: any[]) => void;
export { fileOpener } from './fileOpener';
