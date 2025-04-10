import { ArrowMoveTool, CommonArrowDragContext, MultitailArrowClosestItem } from './arrow.types';
import { Action } from 'ketcher-core';
import { ArrowTool } from './arrowTool';
export declare class MultitailArrowMoveTool extends ArrowTool implements ArrowMoveTool<MultitailArrowClosestItem> {
    mousedown(event: PointerEvent, closestItem: MultitailArrowClosestItem): {
        originalPosition: import("ketcher-core").Vec2;
        action: null;
        closestItem: MultitailArrowClosestItem;
    };
    mousemove(event: PointerEvent, dragContext: CommonArrowDragContext<MultitailArrowClosestItem>): Action;
    mouseup(event: PointerEvent, dragContext: CommonArrowDragContext<MultitailArrowClosestItem>): any;
}
