import Editor from '../../Editor';
import { Vec2 } from 'ketcher-core';
export declare abstract class ArrowTool {
    protected readonly editor: Editor;
    constructor(editor: Editor);
    protected get render(): import("ketcher-core").Render;
    protected get reStruct(): import("ketcher-core/dist/application/render/restruct/restruct").default;
    protected getOffset(event: PointerEvent, original: Vec2): Vec2;
}
