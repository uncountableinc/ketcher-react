import { Tool } from '../Tool';
import Editor from '../../Editor';
import { MULTITAIL_ARROW_TOOL_NAME, RxnArrowMode } from 'ketcher-core';
import { CommonArrowDragContext, MultitailArrowClosestItem, ReactionArrowClosestItem } from './arrow.types';
import { ArrowTool } from './arrowTool';
export declare class CommonArrowTool extends ArrowTool implements Tool {
    static isDragContextMultitail(dragContext: CommonArrowDragContext<MultitailArrowClosestItem | ReactionArrowClosestItem>): dragContext is CommonArrowDragContext<MultitailArrowClosestItem>;
    static isDragContextReaction(dragContext: CommonArrowDragContext<MultitailArrowClosestItem | ReactionArrowClosestItem>): dragContext is CommonArrowDragContext<ReactionArrowClosestItem>;
    private dragContext;
    private addTool;
    private multitailMoveTool;
    private reactionMoveTool;
    constructor(editor: Editor, mode: RxnArrowMode | typeof MULTITAIL_ARROW_TOOL_NAME);
    mousedown(event: PointerEvent): void;
    mousemove(event: PointerEvent): void;
    mouseup(event: PointerEvent): void;
}
