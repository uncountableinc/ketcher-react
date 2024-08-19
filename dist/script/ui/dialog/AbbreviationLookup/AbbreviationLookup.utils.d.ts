/****************************************************************************
 * Copyright 2021 EPAM Systems
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 ***************************************************************************/
import { AbbreviationGenericOption, AbbreviationOption } from './AbbreviationLookup.types';
import { FilterOptionsState } from '@mui/material';
export declare const getStringsSimilarity: (loweredText?: string, loweredSubString?: string) => number;
export declare const highlightOptionLabel: (option: AbbreviationGenericOption, initialLoweredValue: string) => string | import("react/jsx-runtime").JSX.Element;
export declare const getOptionLabel: (option: AbbreviationGenericOption) => string;
export declare const getSimilarity: (option: AbbreviationGenericOption, loweredLookupValue: string) => number;
export declare const filterOptions: (options: AbbreviationOption[], state: FilterOptionsState<AbbreviationOption>) => AbbreviationOption[];