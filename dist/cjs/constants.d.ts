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
export declare const ketcherInitEventName: (ketcherId?: string) => string;
export declare const MODES: {
    FG: string;
};
export declare const STRUCT_TYPE: {
    atoms: string;
    bonds: string;
};
export declare const KETCHER_ROOT_NODE_CLASS_NAME = "Ketcher-root";
export declare const KETCHER_ROOT_NODE_CSS_SELECTOR: string;
export declare const EditorClassName = "Ketcher-polymer-editor-root";
export declare const KETCHER_MACROMOLECULES_ROOT_NODE_SELECTOR: string;
export declare const STRUCT_SERVICE_NO_RENDER_INITIALIZED_EVENT = "struct-service-no-render-initialized";
export declare const STRUCT_SERVICE_INITIALIZED_EVENT = "struct-service-initialized";
export declare const ACS_STYLE_DEFAULT_SETTINGS: {
    atomColoring: boolean;
    font: string;
    fontsz: number;
    fontszUnit: string;
    fontszsub: number;
    fontszsubUnit: string;
    reactionComponentMarginSize: number;
    reactionComponentMarginSizeUnit: string;
    imageResolution: string;
    bondLength: number;
    bondLengthUnit: string;
    bondSpacing: number;
    bondThickness: number;
    bondThicknessUnit: string;
    stereoBondWidth: number;
    stereoBondWidthUnit: string;
    hashSpacing: number;
    hashSpacingUnit: string;
};
