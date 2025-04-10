import { ArrowMoveTool, CommonArrowDragContext, ReactionArrowClosestItem } from './arrow.types';
import { ArrowTool } from './arrowTool';
export declare class ReactionArrowMoveTool extends ArrowTool implements ArrowMoveTool<ReactionArrowClosestItem> {
    private updateResizingState;
    mousedown(event: PointerEvent, closestItem: ReactionArrowClosestItem): {
        originalPosition: import("ketcher-core").Vec2;
        action: null;
        closestItem: ReactionArrowClosestItem;
    };
    mousemove(event: PointerEvent, dragContext: CommonArrowDragContext<ReactionArrowClosestItem>): import("ketcher-core").Action;
    mouseup(_event: PointerEvent, dragContext: CommonArrowDragContext<ReactionArrowClosestItem>): any;
}
