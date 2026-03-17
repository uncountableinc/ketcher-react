import { RxnArrowMode } from 'ketcher-core';
import { Editor } from '../../Editor';
import { ArrowAddTool } from './arrow.types';
export declare class ReactionArrowAddTool implements ArrowAddTool {
    private readonly editor;
    private readonly mode;
    static readonly MIN_LENGTH = 0.5;
    static readonly DEFAULT_LENGTH = 1;
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
