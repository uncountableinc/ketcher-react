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
import { Editor } from '../../Editor';
import { Tool } from '../Tool';
import { SelectMode } from './select.types';
declare class SelectTool implements Tool {
    #private;
    private readonly editor;
    private dragCtx;
    private previousMouseMoveEvent?;
    isMouseDown: boolean;
    isReadyForCopy: boolean;
    isCopied: boolean;
    readonly isMoving = false;
    private multitailArrowMoveTool;
    private reactionArrowMoveTool;
    constructor(editor: Editor, mode: SelectMode);
    isSelectionRunning(): boolean;
    mousedown(event: PointerEvent): boolean;
    mousemove(event: PointerEvent): true | undefined;
    mouseup(event: PointerEvent): void;
    dblclick(event: any): true | undefined;
    mouseleave(): void;
    private isDraggingStructureOnSaltOrSolvent;
    private isCloseToEdgeOfCanvas;
    private handleMoveCloseToEdgeOfCanvas;
    private moveViewBox;
}
export default SelectTool;
