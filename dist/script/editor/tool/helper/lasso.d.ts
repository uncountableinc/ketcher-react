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
import Editor from '../../Editor';
declare class LassoHelper {
    mode: any;
    editor: Editor;
    fragment: any;
    points: any;
    selection: any;
    constructor(mode: any, editor: any, fragment: any);
    getSelection(): {
        atoms: number[];
        bonds: number[];
        rxnArrows: number[];
        rxnPluses: number[];
        enhancedFlags: number[];
        sgroupData: number[];
        simpleObjects: number[];
        texts: number[];
        rgroupAttachmentPoints: number[];
        images: number[];
        multitailArrows: number[];
    };
    begin(event: any): void;
    running(): boolean;
    addPoint(event: any): {
        atoms: number[];
        bonds: number[];
        rxnArrows: number[];
        rxnPluses: number[];
        enhancedFlags: number[];
        sgroupData: number[];
        simpleObjects: number[];
        texts: number[];
        rgroupAttachmentPoints: number[];
        images: number[];
        multitailArrows: number[];
    } | null;
    update(): void;
    end(): {
        atoms: number[];
        bonds: number[];
        rxnArrows: number[];
        rxnPluses: number[];
        enhancedFlags: number[];
        sgroupData: number[];
        simpleObjects: number[];
        texts: number[];
        rgroupAttachmentPoints: number[];
        images: number[];
        multitailArrows: number[];
    };
    cancel(): void;
}
export default LassoHelper;
