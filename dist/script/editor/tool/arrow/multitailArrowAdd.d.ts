import { ArrowAddTool } from './arrow.types';
import Editor from '../../Editor';
export declare class MultitailArrowAddTool implements ArrowAddTool {
    private readonly editor;
    static readonly MIN_HEIGHT = 2.5;
    static readonly MIN_WIDTH = 1.2;
    constructor(editor: Editor);
    private get render();
    private get reStruct();
    mousedown(): void;
    mousemove(): void;
    mouseup(event: MouseEvent): void;
    private getArrowWithMinimalSizeEnd;
}
