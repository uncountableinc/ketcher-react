import { Tool } from '../Tool';
import Editor from '../../Editor';
import { SelectMode } from './select.types';
export declare class SelectViewOnlyTool implements Tool {
    private readonly editor;
    private mode;
    private readonly lassoHelper;
    constructor(editor: Editor, mode: SelectMode);
    isSelectionRunning(): boolean;
    mousedown(event: PointerEvent): void;
    mousemove(event: PointerEvent): void;
    mouseup(event: PointerEvent): void;
    mouseleave(): void;
}
