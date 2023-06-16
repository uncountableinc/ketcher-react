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
import { Atom, Bond } from 'ketcher-core';
import { Editor } from '../Editor';
import { Tool } from './Tool';
declare type SelectMode = 'lasso' | 'fragment' | 'rectangle';
declare class SelectTool implements Tool {
    #private;
    private readonly editor;
    private dragCtx;
    isMousedDown: boolean;
    constructor(editor: Editor, mode: SelectMode);
    isSelectionRunning(): boolean;
    mousedown(event: any): boolean;
    mousemove(event: any): boolean;
    mouseup(event: any): void;
    dblclick(event: any): true | undefined;
    mouseleave(): void;
    private selectElementsOnCanvas;
    private isDraggingStructureOnSaltOrSolvent;
}
export declare function selMerge(selection: any, add: any, reversible: boolean): any;
export declare function getSelectedAtoms(selection: any, molecule: any): Atom[];
export declare function getSelectedBonds(selection: any, molecule: any): Bond[];
export declare function mapAtomIdsToAtoms(atomsIds: number[], molecule: any): Atom[];
export declare function mapBondIdsToBonds(bondsIds: number[], molecule: any): Bond[];
export default SelectTool;
