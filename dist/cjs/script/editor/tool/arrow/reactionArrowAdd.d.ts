import { RxnArrowMode } from 'ketcher-core';
import { Editor } from '../../Editor';
import { ArrowAddTool } from './arrow.types';
export declare class ReactionArrowAddTool implements ArrowAddTool {
    private editor;
    private mode;
    static MIN_LENGTH: number;
    static DEFAULT_LENGTH: number;
    private dragCtx;
    constructor(editor: Editor, mode: RxnArrowMode);
    private get render();
    private get reStruct();
    mousedown(event: MouseEvent): void;
    mousemove(event: MouseEvent): void;
    mouseup(event: MouseEvent): void;
    private getArrowWithMinimalLengthEnd;
    private addNewArrowWithDragging;
    private addNewArrowWithClicking;
    private updateResizingState;
}
