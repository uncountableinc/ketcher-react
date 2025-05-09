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
import { Schema } from 'jsonschema';
declare type ExtendedSchema = Schema & {
    enumNames?: Array<string>;
    default?: any;
};
export declare enum MeasurementUnits {
    Px = "px",
    Cm = "cm",
    Pt = "pt",
    Inch = "inch"
}
export declare enum ImageResolution {
    high = "600",
    low = "72"
}
export declare const SERVER_OPTIONS: string[];
export declare const MIEW_OPTIONS: string[];
declare const optionsSchema: ExtendedSchema;
export default optionsSchema;
export declare function getDefaultOptions(): Record<string, any>;
export declare function validation(settings: any): Record<string, string> | null;
