import { AbbreviationGenericOption, AbbreviationOption, AbbreviationType } from './AbbreviationLookup.types';
export declare const createGenericOption: (name: string, abbreviation?: string, type?: AbbreviationType) => AbbreviationGenericOption;
export declare const createOption: (name: string, abbreviation?: string, type?: AbbreviationType) => AbbreviationOption;
export declare const CLIP_AREA_TEST_ID = "cliparea";
export declare const KetcherWrapper: ({ children }: {
    children: any;
}) => import("react/jsx-runtime").JSX.Element;
